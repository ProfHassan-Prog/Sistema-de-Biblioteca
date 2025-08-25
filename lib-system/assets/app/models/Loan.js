export class Loan{
  constructor({id, userId, bookId, takenAt, dueAt, returnedAt=null}){
    this.id = id; this.userId = userId; this.bookId = bookId;
    this.takenAt = takenAt; this.dueAt = dueAt; this.returnedAt = returnedAt;
  }
}
