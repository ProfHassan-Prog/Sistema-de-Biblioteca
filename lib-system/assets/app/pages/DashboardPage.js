import { BookService } from '../services/BookService.js';
import { LoanService } from '../services/LoanService.js';

export const DashboardPage = {
  async render(){
    const books = BookService.list();
    const loans = LoanService.list();
    const active = loans.filter(l=>!l.returnedAt);
    return `
      <div class="grid cols-3">
        <div class="card kpi"><div>Livros</div><div class="n">${books.length}</div></div>
        <div class="card kpi"><div>Empréstimos</div><div class="n">${loans.length}</div></div>
        <div class="card kpi"><div>Ativos</div><div class="n">${active.length}</div></div>
      </div>
    `;
  }
};
