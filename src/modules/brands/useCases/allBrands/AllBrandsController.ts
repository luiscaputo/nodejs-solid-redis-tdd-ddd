import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllBrandsUseCase } from './AllBrandsUseCase';

class AllBrandsController {
  async handle(_: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllBrandsUseCase);

    const brands = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: brands,
    });
  }
}

export { AllBrandsController };
