import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBrandsUseCase } from './CreateBrandsUseCase';

class CreateBrandsController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(CreateBrandsUseCase);

    const brands = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: brands,
    });
  }
}

export { CreateBrandsController };
