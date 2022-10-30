import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

import { showError } from './index';

export const category = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  await showError(req, res, next, schema);
};
