import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStoresUseCase } from './CreateStoreUseCase';

class CreateStoresController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(CreateStoresUseCase);

    const stores = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: stores,
    });
  }
}

export { CreateStoresController };
