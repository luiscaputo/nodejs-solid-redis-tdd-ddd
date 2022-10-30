import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateStoresUseCase } from './UpdateStoreUseCase';

class UpdateStoresController {
  async handle(req: Request, res: Response) {
    const { storeId } = req.params;
    const { name } = req.body;
    const useCase = container.resolve(UpdateStoresUseCase);

    const store = await useCase.execute({
      id: storeId,
      name,
    });

    return res.status(200).json({
      success: true,
      data: store,
    });
  }
}

export { UpdateStoresController };
