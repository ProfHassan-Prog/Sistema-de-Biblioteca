import { BookService } from '../services/BookService.js';
import { Table } from '../components/Table.js';
import { toast } from '../components/Toast.js';

export const BooksPage = {
  async render(){
    const books = BookService.list();
    const columns = [
      { key:'title', label:'Título' },
      { key:'author', label:'Autor' },
      { key:'year', label:'Ano' },
      { key:'isbn', label:'ISBN' },
      { key:'category', label:'Categoria' },
      { key:'available', label:'Disp.', render:(v,r)=>`<span class="badge ${v>0?'ok':'warn'}">${v}/${r.total}</span>` }
    ];
    const actions = [ {key:'delete', label:'Excluir'}, ];
    return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <h2>Livros</h2>
          <a class="btn primary" href="#/books/new">+ Novo</a>
        </div>
        ${Table({ columns, rows: books, rowActions: actions })}
      </div>
    `;
  },
  async afterRender(){
    document.querySelectorAll('[data-action="delete"]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-id');
        BookService.remove(id); toast('Livro removido'); location.reload();
      });
    });
  }
};
