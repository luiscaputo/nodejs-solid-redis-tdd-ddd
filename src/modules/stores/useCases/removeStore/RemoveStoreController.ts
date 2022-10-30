import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveStoreUseCases } from './RemoveStoreUseCases';

class RemoveStoreController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(RemoveStoreUseCases);

    const stores = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: stores,
    });
  }
}

export { RemoveStoreController };
