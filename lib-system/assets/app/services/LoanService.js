import { storage } from '../core/storage.js';
import { Loan } from '../models/Loan.js';
import { BookService } from './BookService.js';
import { nowIso, plusDaysIso } from '../utils/dates.js';

const K = storage.KEYS.LOANS; const uid = ()=>'l_'+crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

export const LoanService = {
  list(){ return storage.read(K) ?? []; },
  active(){ return this.list().filter(l=>!l.returnedAt); },
  create({userId, bookId, days=7}){
    const book = BookService.find(bookId);
    if(!book) throw new Error('Livro não encontrado');
    if(book.available<=0) throw new Error('Sem exemplares disponíveis');
    BookService.update(bookId, { available: book.available - 1 });
    const loan = new Loan({ id: uid(), userId, bookId, takenAt: nowIso(), dueAt: plusDaysIso(days) });
    const loans = this.list(); loans.push(loan); storage.write(K, loans); return loan;
  },
  return(loanId){
    const loans = this.list();
    const i = loans.findIndex(l=>l.id===loanId);
    if(i===-1) throw new Error('Empréstimo não encontrado');
    if(loans[i].returnedAt) throw new Error('Já devolvido');
    loans[i] = { ...loans[i], returnedAt: nowIso() };
    storage.write(K, loans);
    // devolve exemplar
    const book = BookService.find(loans[i].bookId);
    if(book) BookService.update(book.id, { available: book.available + 1 });
    return loans[i];
  }
};
