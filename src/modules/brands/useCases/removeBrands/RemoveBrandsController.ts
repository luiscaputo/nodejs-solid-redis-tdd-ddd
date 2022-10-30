import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveBrandsUseCases } from './RemoveBrandsUseCases';

class RemoveBrandsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(RemoveBrandsUseCases);

    const brands = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: brands,
    });
  }
}

export { RemoveBrandsController };
