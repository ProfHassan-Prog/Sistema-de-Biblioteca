import { storage } from '../core/storage.js';
import { Book } from '../models/Book.js';

const K = storage.KEYS.BOOKS;
const uid = ()=>'b_'+crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

export const BookService = {
  list(){ return storage.read(K) ?? []; },
  find(id){ return this.list().find(b=>b.id===id) || null; },
  create(payload){
    const b = new Book({ id: uid(), ...payload });
    const books = this.list();
    books.push(b);
    storage.write(K, books);
    return b;
  },
  update(id, patch){
    const books = this.list();
    const i = books.findIndex(b=>b.id===id);
    if(i===-1) throw new Error('Livro não encontrado');
    books[i] = { ...books[i], ...patch };
    storage.write(K, books);
    return books[i];
  },
  remove(id){
    const books = this.list();
    storage.write(K, books.filter(b=>b.id!==id));
  }
};
