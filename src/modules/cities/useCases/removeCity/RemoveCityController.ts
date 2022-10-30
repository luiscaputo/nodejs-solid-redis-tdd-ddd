import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveCityUseCases } from './RemoveCityUseCases';

class RemoveCityController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = container.resolve(RemoveCityUseCases);

    const city = await useCase.execute({ id });

    return res.status(200).json({
      success: true,
      data: city,
    });
  }
}

export { RemoveCityController };
