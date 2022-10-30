import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetBrandsUseCase } from './GetBrandsUseCase';

class GetBrandsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(GetBrandsUseCase);

    const brands = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: brands,
    });
  }
}

export { GetBrandsController };
