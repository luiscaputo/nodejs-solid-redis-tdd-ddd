import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { categoryId } = req.params;
    const { name } = req.body;
    const useCase = container.resolve(UpdateCategoryUseCase);

    const category = await useCase.execute({ id: categoryId, name });

    return res.status(200).json({
      success: true,
      data: category,
    });
  }
}

export { UpdateCategoryController };
