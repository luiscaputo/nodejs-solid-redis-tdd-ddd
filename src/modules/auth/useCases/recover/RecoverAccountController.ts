import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RecoverAccountUseCase } from './RecoverAccountUseCase';

class RecoverAccountController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(RecoverAccountUseCase);

    const recover = await useCase.execute(req.body);

    return res.status(200).json({ success: true, data: recover });
  }
}

export { RecoverAccountController };
