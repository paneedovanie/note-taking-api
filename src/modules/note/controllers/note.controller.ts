import { Request, Response } from "express";
import { NoteModel } from "../models";
import { NoteService } from "../services";
import { TCreateNote, TIdParam, TUpdateNote } from "../types";
import { createApiResponse } from "../../../core";

export class NoteController {
  constructor(private readonly noteService = new NoteService()) {}

  list(req: Request<undefined, NoteModel[]>, res: Response): void {
    createApiResponse(res, () => this.noteService.list());
  }

  getOne(req: Request<TIdParam, NoteModel>, res: Response): void {
    createApiResponse(res, () => this.noteService.getOne(req.params.id));
  }

  create(req: Request<undefined, NoteModel, TCreateNote>, res: Response): void {
    createApiResponse(res, () => this.noteService.create(req.body), 201);
  }

  update(req: Request<TIdParam, NoteModel, TUpdateNote>, res: Response): void {
    createApiResponse(
      res,
      () => this.noteService.update(req.params.id, req.body),
      202
    );
  }

  delete(req: Request<TIdParam, NoteModel>, res: Response): void {
    createApiResponse(res, () => this.noteService.delete(req.params.id), 204);
  }
}
