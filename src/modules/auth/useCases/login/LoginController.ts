import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LoginUseCase } from './LoginUseCase';

class LoginController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(LoginUseCase);

    const login = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: login,
    });
  }
}

export { LoginController };
