import { BookService } from '../services/BookService.js';
import { validateBook } from '../utils/validators.js';
import { toast } from '../components/Toast.js';

export const BookNewPage = {
  async render(){
    return `
      <div class="card">
        <h2>Novo Livro</h2>
        <form id="book-form" class="grid cols-2" autocomplete="off">
          <div><label>Título*</label><input name="title" /></div>
          <div><label>Autor*</label><input name="author" /></div>
          <div><label>Ano</label><input name="year" type="number" /></div>
          <div><label>ISBN</label><input name="isbn" /></div>
          <div><label>Categoria</label><input name="category" /></div>
          <div><label>Total*</label><input name="total" type="number" value="1" /></div>
          <div><label>Disponível*</label><input name="available" type="number" value="1" /></div>
          <div style="align-self:end;justify-self:end">
            <button class="btn ghost" type="reset">Limpar</button>
            <button class="btn primary" type="submit">Salvar</button>
          </div>
        </form>
        <div id="errors" style="margin-top:8px;color:#fecaca"></div>
      </div>
    `;
  },
  async afterRender(){
    const form = document.getElementById('book-form');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      data.total = Number(data.total); data.available = Number(data.available);
      const errors = validateBook(data);
      const box = document.getElementById('errors');
      if(Object.keys(errors).length){ box.innerHTML = Object.values(errors).map(e=>`• ${e}`).join('<br>'); return; }
      BookService.create(data); toast('Livro cadastrado!'); location.hash = '#/books';
    });
  }
};
