import { z } from "zod";
import {
  NOTE_BODY_MAX_LENGTH,
  NOTE_TITLE_MAX_LENGTH,
} from "../../../constants";

export const BaseNoteValidationSchema = z.object({
  title: z.string().max(NOTE_TITLE_MAX_LENGTH),
  body: z.string().max(NOTE_BODY_MAX_LENGTH),
});
