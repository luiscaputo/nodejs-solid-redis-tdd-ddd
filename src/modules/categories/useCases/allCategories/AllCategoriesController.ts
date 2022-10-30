import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllCategoriesUseCase } from './AllCategoriesUseCase';

class AllCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllCategoriesUseCase);

    const categories = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: categories,
    });
  }
}

export { AllCategoriesController };
