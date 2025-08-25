import { storage } from '../core/storage.js';
import { User } from '../models/User.js';
const K = storage.KEYS.USERS; const uid = ()=>'u_'+crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
export const UserService = {
  list(){ return storage.read(K) ?? []; },
  create(payload){ const u = new User({id:uid(), ...payload}); const all=this.list(); all.push(u); storage.write(K, all); return u; }
};
