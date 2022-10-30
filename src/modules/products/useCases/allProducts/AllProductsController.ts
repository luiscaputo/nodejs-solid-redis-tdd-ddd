import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllProductsUseCase } from './AllProductsUseCases';

class AllProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllProductsUseCase);

    const products = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: products,
    });
  }
}

export { AllProductsController };
