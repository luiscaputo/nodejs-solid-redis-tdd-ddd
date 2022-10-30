import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetCityUseCase } from './GetCityUseCase';

class GetCityController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(GetCityUseCase);

    const city = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: city,
    });
  }
}

export { GetCityController };
