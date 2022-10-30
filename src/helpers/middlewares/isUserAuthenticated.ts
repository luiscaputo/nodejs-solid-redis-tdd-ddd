import { UsersRepositoryImpl } from '~/modules/users/repositories/implementations/UsersRepositoryImpl';
import { AppError } from '~/shared/errors/appErrors';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayLod {
  id: string;
}
export async function isUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing');
  }
  const [, token] = authHeader.split(' ');

  try {
    const { id } = verify(token, process.env.JWT_SECRET) as IPayLod;

    const userRepository = new UsersRepositoryImpl();
    const user = await userRepository.findUserById({ id });

    if (!user) {
      throw new AppError('User not exist');
    }

    next();
  } catch (error: any) {
    throw new AppError(error?.message);
  }
}
