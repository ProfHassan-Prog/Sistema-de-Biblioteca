import { BookService } from '../services/BookService.js';
import { UserService } from '../services/UserService.js';
import { LoanService } from '../services/LoanService.js';
import { fmt } from '../utils/dates.js';
import { toast } from '../components/Toast.js';

export const LoansPage = {
  async render(){
    const users = UserService.list();
    const books = BookService.list();
    const loans = LoanService.list();

    const userOpts = users.map(u=>`<option value="${u.id}">${u.name}</option>`).join('');
    const bookOpts = books.map(b=>`<option value="${b.id}" ${b.available?"":"disabled"}>${b.title} (${b.available}/${b.total})</option>`).join('');

    const rows = loans.map(l=>{
      const u = users.find(u=>u.id===l.userId)?.name || '—';
      const b = books.find(b=>b.id===l.bookId)?.title || '—';
      const status = l.returnedAt ? `<span class="badge ok">Devolvido</span>` : `<span class="badge warn">Em aberto</span>`;
      const btn = l.returnedAt?'' : `<button class="btn primary" data-return="${l.id}">Devolver</button>`;
      return `
        <tr>
          <td>${u}</td>
          <td>${b}</td>
          <td>${fmt(l.takenAt)}</td>
          <td>${fmt(l.dueAt)}</td>
          <td>${status}</td>
          <td>${btn}</td>
        </tr>`;
    }).join('');

    return `
      <div class="grid cols-2">
        <div class="card">
          <h2>Novo Empréstimo</h2>
          <form id="loan-form" class="grid cols-2">
            <div><label>Usuário</label><select name="userId">${userOpts}</select></div>
            <div><label>Livro</label><select name="bookId">${bookOpts}</select></div>
            <div><label>Dias</label><input name="days" type="number" value="7" min="1"/></div>
            <div style="align-self:end;justify-self:end">
              <button class="btn primary" type="submit">Criar Empréstimo</button>
            </div>
          </form>
        </div>
        <div class="card">
          <h2>Empréstimos</h2>
          <table class="table">
            <tr><th>Usuário</th><th>Livro</th><th>Retirada</th><th>Prazo</th><th>Status</th><th>Ações</th></tr>
            ${rows}
          </table>
        </div>
      </div>
    `;
  },
  async afterRender(){
    document.getElementById('loan-form').addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      data.days = Number(data.days)||7;
      try{
        LoanService.create(data); toast('Empréstimo criado'); location.reload();
      }catch(err){ toast(err.message); }
    });
    document.querySelectorAll('[data-return]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        try{ LoanService.return(btn.getAttribute('data-return')); toast('Devolvido!'); location.reload(); }
        catch(err){ toast(err.message); }
      });
    });
  }
};
