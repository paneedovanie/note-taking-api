import { v4 } from "uuid";

export class NoteModel {
  public id?: string;
  public title: string;
  public body: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(data: { id?: string; title: string; body: string }) {
    this.id = data.id ?? v4();
    this.title = data.title;
    this.body = data.body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
