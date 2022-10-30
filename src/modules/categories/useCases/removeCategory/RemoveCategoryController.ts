import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveCategoryUseCases } from './RemoveCategoryUseCases';

class RemoveCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(RemoveCategoryUseCases);

    const category = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: category,
    });
  }
}

export { RemoveCategoryController };
