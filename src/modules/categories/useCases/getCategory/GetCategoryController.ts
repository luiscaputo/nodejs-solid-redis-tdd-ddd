import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetCategoryUseCase } from './GetCategoryUseCase';

class GetCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(GetCategoryUseCase);

    const category = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: category,
    });
  }
}

export { GetCategoryController };
