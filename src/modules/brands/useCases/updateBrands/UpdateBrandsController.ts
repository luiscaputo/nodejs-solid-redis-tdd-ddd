import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateBrandsUseCase } from './UpdateBrandsUseCase';

class UpdateBrandsController {
  async handle(req: Request, res: Response) {
    const { brandsId } = req.params;
    const { name } = req.body;
    const useCase = container.resolve(UpdateBrandsUseCase);

    const brands = await useCase.execute({ id: brandsId, name });

    return res.status(200).json({
      success: true,
      data: brands,
    });
  }
}

export { UpdateBrandsController };
