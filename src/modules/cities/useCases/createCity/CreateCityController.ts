import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCityUseCase } from './CreateCityUseCase';

class CreateCityController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(CreateCityUseCase);

    const city = await useCase.execute(req.body);

    return res.status(200).json({
      success: true,
      data: city,
    });
  }
}

export { CreateCityController };
