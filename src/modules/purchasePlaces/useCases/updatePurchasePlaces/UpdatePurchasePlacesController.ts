import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePurchasePlacesUseCase } from './UpdatePurchasePlacesUseCase';

class UpdatePurchasePlacesController {
  async handle(req: Request, res: Response) {
    const { purchasePlaceId } = req.params;
    const { name } = req.body;
    const useCase = container.resolve(UpdatePurchasePlacesUseCase);

    const purchasePlaces = await useCase.execute({
      id: purchasePlaceId,
      name,
    });

    return res.status(200).json({
      success: true,
      data: purchasePlaces,
    });
  }
}

export { UpdatePurchasePlacesController };
