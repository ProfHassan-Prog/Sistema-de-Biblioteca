// assets/app/main.js
import { storage } from './core/storage.js';
import { registerRoute, render } from './core/routes.js';  // <— era router.js
import { Navbar } from './components/NavBar.js';

// As páginas existem com estes nomes de ARQUIVO:
import { DashboardPage } from './pages/DashboardPage.js';
import { BooksPage }     from './pages/BookPage.js';       // <— arquivo é BookPage.js
import { BookNewPage }   from './pages/BooksNewPage.js';   // <— arquivo é BooksNewPage.js
import { LoansPage }     from './pages/LoanPage.js';       // <— arquivo é LoanPage.js
import { UsersPage }     from './pages/UsersPage.js';

// Monta navbar
document.getElementById('navbar').innerHTML = Navbar();

// Seed inicial
storage.seedIfEmpty();

// Rotas
registerRoute('/', DashboardPage);
registerRoute('/books', BooksPage);
registerRoute('/books/new', BookNewPage);
registerRoute('/loans', LoansPage);
registerRoute('/users', UsersPage);

// Primeira renderização
render();
