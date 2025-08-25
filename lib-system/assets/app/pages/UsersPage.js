import { UserService } from '../services/UserService.js';

export const UsersPage = {
  async render(){
    const users = UserService.list();
    const rows = users.map(u=>`<tr><td>${u.name}</td><td>${u.email}</td></tr>`).join('');
    return `
      <div class="grid cols-2">
        <div class="card">
          <h2>Novo Usuário</h2>
          <form id="user-form" class="grid cols-2">
            <div><label>Nome</label><input name="name" required/></div>
            <div><label>E-mail</label><input name="email" type="email" required/></div>
            <div style="align-self:end;justify-self:end">
              <button class="btn primary" type="submit">Salvar</button>
            </div>
          </form>
        </div>
        <div class="card">
          <h2>Usuários</h2>
          <table class="table"><tr><th>Nome</th><th>E-mail</th></tr>${rows}</table>
        </div>
      </div>`;
  },
  async afterRender(){
    document.getElementById('user-form').addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      UserService.create(data); location.reload();
    });
  }
};
