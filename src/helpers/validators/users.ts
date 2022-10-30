import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

import { showError } from './index';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
  });

  await showError(req, res, next, schema);
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(6).required(),
    admin: yup.boolean(),
  });

  await showError(req, res, next, schema);
};

export const recover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
  });

  await showError(req, res, next, schema);
};

export const change = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    newPassword: yup.string().min(6).required(),
  });

  await showError(req, res, next, schema);
};
