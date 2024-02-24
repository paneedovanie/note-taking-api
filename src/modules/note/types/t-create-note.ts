import { z } from "zod";
import { CreateNoteValidationSchema } from "../validation-schemas";

export type TCreateNote = z.infer<typeof CreateNoteValidationSchema>;
