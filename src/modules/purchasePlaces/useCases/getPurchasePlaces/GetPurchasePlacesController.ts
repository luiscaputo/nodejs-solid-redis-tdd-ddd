import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPurchasePlacesUseCase } from './GetPurchasePlacesUseCase';

class GetPurchasePlacesController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(GetPurchasePlacesUseCase);

    const purchasePlaces = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: purchasePlaces,
    });
  }
}

export { GetPurchasePlacesController };
