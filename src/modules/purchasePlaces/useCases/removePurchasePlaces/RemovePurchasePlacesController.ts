import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemovePurchasePlacesUseCases } from './RemovePurchasePlacesUseCases';

class RemovePurchasePlacesController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(RemovePurchasePlacesUseCases);

    const purchasePlaces = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: purchasePlaces,
    });
  }
}

export { RemovePurchasePlacesController };
