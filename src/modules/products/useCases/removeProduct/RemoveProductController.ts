import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveProductsUseCases } from './RemoveProductUseCase';

class RemoveProductsController {
  async handle(req: Request, res: Response) {
    const { code } = req.params;
    const useCase = container.resolve(RemoveProductsUseCases);

    const products = await useCase.execute({ code });

    return res.status(200).json({
      success: true,
      message: 'Product Removed successfully',
      data: products,
    });
  }
}

export { RemoveProductsController };
