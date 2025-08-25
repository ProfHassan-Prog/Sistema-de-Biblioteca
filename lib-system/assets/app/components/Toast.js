export function toast(msg){
  const c = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className='toast'; el.textContent=msg; c.appendChild(el);
  setTimeout(()=>{ el.remove(); }, 2500);
}
