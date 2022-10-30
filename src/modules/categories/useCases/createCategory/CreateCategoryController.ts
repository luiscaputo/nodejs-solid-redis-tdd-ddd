import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(CreateCategoryUseCase);

    const category = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: category,
    });
  }
}

export { CreateCategoryController };
