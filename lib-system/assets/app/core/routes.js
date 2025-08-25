// Roteador simples por hash (#/rota)
const routes = new Map();

export function registerRoute(path, page){ routes.set(path, page); }

export async function navigateTo(path){
  if(location.hash !== `#${path}`) location.hash = path;
  await render();
}

export async function render(){
  const view = document.getElementById('view');
  const path = location.hash.replace('#','') || '/';
  const page = routes.get(path) || routes.get('/');
  if(!page) return;
  view.innerHTML = await page.render();
  if(page.afterRender) await page.afterRender();
  setActiveLink(path);
}

function setActiveLink(path){
  document.querySelectorAll('#navbar a').forEach(a=>{
    const href = a.getAttribute('href')?.replace('#','');
    a.classList.toggle('active', href === path);
  });
}

window.addEventListener('hashchange', render);

