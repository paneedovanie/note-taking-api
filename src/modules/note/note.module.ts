import { createBodyValidation } from "../../core";
import { NoteController } from "./controllers";
import { Express } from "express";
import {
  CreateNoteValidationSchema,
  UpdateNoteValidationSchema,
} from "./validation-schemas";

export class NoteModule {
  constructor(
    private readonly app: Express,
    private noteController = new NoteController()
  ) {
    this.createRoutes();
  }

  private createRoutes() {
    this.app.get(`/notes`, this.noteController.list.bind(this.noteController));

    this.app.get(
      `/notes/:id`,
      this.noteController.getOne.bind(this.noteController)
    );

    this.app.post(
      `/notes`,
      createBodyValidation(CreateNoteValidationSchema),
      this.noteController.create.bind(this.noteController)
    );

    this.app.put(
      `/notes/:id`,
      createBodyValidation(UpdateNoteValidationSchema),
      this.noteController.update.bind(this.noteController)
    );

    this.app.delete(
      `/notes/:id`,
      this.noteController.delete.bind(this.noteController)
    );
  }
}
