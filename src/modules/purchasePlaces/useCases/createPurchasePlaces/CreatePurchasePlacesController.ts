import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePurchasePlacesUseCase } from './CreatePurchasePlacesUseCase';

class CreatePurchasePlacesController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(CreatePurchasePlacesUseCase);

    const purchasePlaces = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: purchasePlaces,
    });
  }
}

export { CreatePurchasePlacesController };
