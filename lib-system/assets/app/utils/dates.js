export const nowIso = () => new Date().toISOString();
export const plusDaysIso = (days) => new Date(Date.now()+days*86400000).toISOString();
export const fmt = (iso) => new Date(iso).toLocaleDateString('pt-BR');
