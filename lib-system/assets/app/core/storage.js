// Wrapper de localStorage com namespace e seed inicial
const NS = "libsys:v1";
const KEYS = { BOOKS: "books", USERS: "users", LOANS: "loans" };

function k(key){ return `${NS}:${key}`; }

function read(key){
  const raw = localStorage.getItem(k(key));
  return raw ? JSON.parse(raw) : null;
}
function write(key, value){ localStorage.setItem(k(key), JSON.stringify(value)); }
function upsert(key, updateFn){ const curr = read(key) ?? []; write(key, updateFn(curr)); }
function clearAll(){ Object.values(KEYS).forEach(key => localStorage.removeItem(k(key))); }

function seedIfEmpty(){
  if(!read(KEYS.BOOKS)) write(KEYS.BOOKS, [
    {id:"b1", title:"Clean Code", author:"Robert C. Martin", year:2008, isbn:"9780132350884", category:"Engenharia de Software", total:5, available:5},
    {id:"b2", title:"Dom Casmurro", author:"Machado de Assis", year:1899, isbn:"9788572327525", category:"Romance", total:3, available:3}
  ]);
  if(!read(KEYS.USERS)) write(KEYS.USERS, [
    {id:"u1", name:"Ana Souza", email:"ana@exemplo.com"},
    {id:"u2", name:"João Silva", email:"joao@exemplo.com"}
  ]);
  if(!read(KEYS.LOANS)) write(KEYS.LOANS, []);
}

export const storage = { KEYS, read, write, upsert, clearAll, seedIfEmpty };

