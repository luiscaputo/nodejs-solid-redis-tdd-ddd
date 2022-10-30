import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCityUseCase } from './UpdateCityUseCase';

class UpdateCityController {
  async handle(req: Request, res: Response) {
    const { cityId } = req.params;
    const { name } = req.body;
    const useCase = container.resolve(UpdateCityUseCase);

    const city = await useCase.execute({ id: cityId, name });

    return res.status(200).json({
      success: true,
      data: city,
    });
  }
}

export { UpdateCityController };
