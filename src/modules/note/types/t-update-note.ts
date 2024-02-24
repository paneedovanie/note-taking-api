import { z } from "zod";
import { UpdateNoteValidationSchema } from "../validation-schemas";

export type TUpdateNote = z.infer<typeof UpdateNoteValidationSchema>;
