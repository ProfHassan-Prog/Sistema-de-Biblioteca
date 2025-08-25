export class Book{
  constructor({id, title, author, year, isbn, category, total, available}){
    this.id = id; this.title = title; this.author = author; this.year = Number(year) || null;
    this.isbn = isbn; this.category = category; this.total = Number(total)||0; this.available = Number(available)||0;
  }
}
