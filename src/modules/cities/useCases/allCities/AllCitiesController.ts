import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllCitiesUseCase } from './AllCitiesUseCase';

class AllCitiesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(AllCitiesUseCase);

    const cities = await useCase.execute();

    return res.status(200).json({
      success: true,
      data: cities,
    });
  }
}

export { AllCitiesController };
