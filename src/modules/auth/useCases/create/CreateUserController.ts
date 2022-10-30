import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateUserUseCase);

    const user = await useCase.execute(req.body);

    return res.status(200).json({ success: true, data: user });
  }
}

export { CreateUserController };
