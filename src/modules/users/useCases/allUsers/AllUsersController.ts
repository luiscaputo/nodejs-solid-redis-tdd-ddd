import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllUsersUseCase } from './AllUsersUseCase';

class AllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllUsersUseCase);

    const users = useCase.execute();

    return res.status(200).json({
      success: true,
      data: await users,
    });
  }
}

export { AllUsersController };
