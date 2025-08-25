export function Table({ columns, rows, rowActions=[] }){
  const thead = `<tr>${columns.map(c=>`<th>${c.label}</th>`).join('')}${rowActions.length?'<th>Ações</th>':''}</tr>`;
  const tbody = rows.map(r=>{
    const tds = columns.map(c=>`<td>${c.render?c.render(r[c.key], r):r[c.key] ?? ''}</td>`).join('');
    const actions = rowActions.map(a=>`<button class="btn ghost" data-action="${a.key}" data-id="${r.id}">${a.label}</button>`).join(' ');
    return `<tr>${tds}${rowActions.length?`<td>${actions}</td>`:''}</tr>`;
  }).join('');
  return `<table class="table">${thead}${tbody}</table>`;
}
