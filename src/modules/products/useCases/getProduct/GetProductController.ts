import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetProductUseCase } from './GetProductUseCase';

class GetProductController {
  async handle(req: Request, res: Response) {
    const { code } = req.params;
    const useCase = container.resolve(GetProductUseCase);

    const products = await useCase.execute({ code });

    products.imageUrl = process.env.BASE_URL + products.imageUrl;

    return res.status(200).json({
      success: true,
      data: products,
    });
  }
}

export { GetProductController };
