import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllStoresUseCase } from './AllStoresUseCase';

class AllStoresController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllStoresUseCase);

    const stores = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: stores,
    });
  }
}

export { AllStoresController };
