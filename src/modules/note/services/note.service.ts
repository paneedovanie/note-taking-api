import { NotFoundError } from "./../../../core";
import { TCreateNote } from "./../types";
import { NoteModel } from "../models";
import { TUpdateNote } from "../types/t-update-note";

export class NoteService {
  private collections: NoteModel[] = [];

  list(): NoteModel[] {
    return this.collections;
  }

  getOne(id: string): NoteModel | undefined {
    const note = this.collections.find((item) => item.id === id);
    if (!note) throw new NotFoundError(`Note with id: ${id} not found`);
    return note;
  }

  create(input: TCreateNote): NoteModel {
    const note = new NoteModel(input);
    this.collections.push(note);
    return note;
  }

  update(id: string, input: TUpdateNote): NoteModel {
    const index = this.collections.findIndex((item) => item.id === id);
    let note = this.collections[index];
    if (!note) throw new NotFoundError(`Note with id: ${id} not found`);
    note = {
      ...note,
      ...input,
      updatedAt: new Date(),
    };
    this.collections[index] = note;
    return note;
  }

  delete(id: string): void {
    const index = this.collections.findIndex((item) => item.id === id);
    const note = this.collections[index];
    if (!note) throw new NotFoundError(`Note with id: ${id} not found`);
    this.collections.splice(index, 1);
  }
}
