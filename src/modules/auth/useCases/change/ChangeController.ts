import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ChangeUseCase } from './ChangeUseCase';

class ChangeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ChangeUseCase);

    const recover = await useCase.execute(req.body);

    return res.status(200).json({ success: true, data: recover });
  }
}

export { ChangeController };
