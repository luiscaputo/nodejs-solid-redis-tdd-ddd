import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetStoreUseCase } from './GetStoreUseCase';

class GetStoreController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(GetStoreUseCase);

    const store = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: store,
    });
  }
}

export { GetStoreController };
