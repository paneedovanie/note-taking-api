import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const createBodyValidation = (schema: z.AnyZodObject) => {
  return (
    req: Request<unknown, unknown>,
    res: Response,
    next: NextFunction
  ) => {
    const result = schema.safeParse(req.body);
    if ("error" in result) {
      res.status(400).json(result.error?.flatten());
    }
    next();
  };
};
