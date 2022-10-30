import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllPurchasePlacesUseCase } from './AllPurchasePlacesUseCase';

class AllPurchasePlacesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllPurchasePlacesUseCase);

    const purchasePlaces = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: purchasePlaces,
    });
  }
}

export { AllPurchasePlacesController };
