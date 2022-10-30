import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

export const showError = async (
  req: Request<any>,
  res: Response,
  next: NextFunction,
  schema: any
) => {
  try {
    await schema.validate(req.body);

    return next();
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return res.status(400).json({ success: false, message: err.message });
    }

    return res
      .status(500)
      .json({ success: false, message: 'Falha ao processar a requisição' });
  }
};
