export const required = (v) => v!==undefined && v!==null && String(v).trim()!=='';
export const positiveInt = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;
export function validateBook(payload){
  const errors = {};
  if(!required(payload.title)) errors.title = 'Título é obrigatório';
  if(!required(payload.author)) errors.author = 'Autor é obrigatório';
  if(!required(payload.total) || !positiveInt(payload.total)) errors.total = 'Total deve ser inteiro >= 0';
  if(!required(payload.available) || !positiveInt(payload.available)) errors.available = 'Disponível deve ser inteiro >= 0';
  if(Number(payload.available) > Number(payload.total)) errors.available = 'Disponível não pode exceder o total';
  return errors;
}
