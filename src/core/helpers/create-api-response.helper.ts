import { Response } from "express";
import { NotFoundError } from "../errors";

export const createApiResponse = (
  res: Response,
  cb: () => void,
  status = 200
) => {
  try {
    res.status(status).json(cb());
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json(err.message);
    } else if (err instanceof Error) {
      res.status(500).json(err.message);
    } else {
      res.status(500).json("Internal server error");
    }
  }
};
