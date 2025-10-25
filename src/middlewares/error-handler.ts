import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }
  // Log here to show an engineer, what unexpected error occurred
  console.log(err);
  return res.status(400).send({ errors: [{ message: "Something broke!!" }] });
};

export { errorHandler };
