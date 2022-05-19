import { AnyObjectSchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../utils/log";

const validateResource = (resourceSchema: AnyObjectSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resourceSchema.validate({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (e) {
    log.error(e);
    res.sendStatus(400).send(e);
  }
}

export default validateResource;