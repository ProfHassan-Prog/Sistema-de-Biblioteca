# 📚 Sistema de Biblioteca
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/222576e8-4918-45de-9b0f-29a727b01d2e" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/dff61707-c032-4150-a1a3-33f1539b1cd3" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6d7d3c05-1af1-4d6a-97f1-361405dbbea2" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/5a1526f3-f591-4aa3-aa01-ca03e96b5413" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/fe92540f-f0be-4163-b6e1-4df9a289c448" />

Um sistema de gerenciamento de biblioteca construído em **HTML, CSS e JavaScript (Vanilla)**.  
Trata-se de uma aplicação **SPA (Single Page Application)** organizada em camadas, com persistência via `localStorage`, roteamento por hash (`#/rota`) e interface modular.  

---

## 🚀 Funcionalidades
- **Livros**
  - Cadastro de novos livros com validação
  - Listagem com estoque disponível
  - Exclusão de registros
- **Usuários**
  - Registro de novos leitores
  - Listagem de usuários cadastrados
- **Empréstimos**
  - Criação de empréstimos com prazo definido
  - Controle de disponibilidade de exemplares
  - Devolução de livros com atualização automática do estoque
- **Dashboard**
  - Indicadores de livros cadastrados
  - Total de empréstimos realizados
  - Empréstimos ativos

---

## 🏗️ Arquitetura do Projeto
O sistema segue um modelo **modular** baseado em camadas:

lib-system/
├─ index.html # Ponto de entrada

├─ assets/
│ ├─ css/ # Estilos globais
│ │ └─ style.css
│ └─ app/
│ ├─ core/ # Infraestrutura (router, storage)
│ ├─ models/ # Estruturas de dados (Book, User, Loan)
│ ├─ services/ # Regras de negócio
│ ├─ components/ # Componentes reutilizáveis (Navbar, Table, Toast)
│ ├─ pages/ # Páginas da aplicação (Books, Users, Loans, Dashboard)
│ └─ utils/ # Funções utilitárias (datas, validações)
└─ README.md


### 📌 Organização em camadas
- **Core:** infraestrutura da aplicação (roteamento e persistência).
- **Models:** definição de entidades do domínio (`Book`, `User`, `Loan`).
- **Services:** lógica de negócios (CRUD e regras de empréstimos).
- **Components:** elementos de UI reutilizáveis.
- **Pages:** telas renderizadas pelo roteador.
- **Utils:** funções auxiliares (datas e validações).

---

## 🛠️ Tecnologias Utilizadas
- **HTML5** (estrutura e SPA container)
- **CSS3** (estilização responsiva, dark theme)
- **JavaScript (ES6 Modules)** (lógica, regras e roteamento)
- **localStorage** (persistência de dados)
- **Live Server** ou qualquer servidor estático (para servir ES Modules)

---

## 📂 Como Executar
1. Clone ou baixe este repositório.
   ```bash
   git clone https://github.com/seu-usuario/lib-system.git
   cd lib-system
2. Abra a pasta lib-system no VSCode.

3. Instale e execute a extensão Live Server (ou outro servidor estático):
    Clique com o botão direito em index.html → Open with Live Server
    O app estará disponível em:
        http://127.0.0.1:5500/index.html

4. Recarregue com Ctrl+F5 se precisar resetar o cache.
