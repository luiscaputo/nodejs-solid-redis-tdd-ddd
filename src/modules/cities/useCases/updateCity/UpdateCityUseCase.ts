import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import { inject, injectable } from 'tsyringe';

import { IUpdateCityDTO } from '../../dtos';
import { ICityRepository } from '../../repositories/ICityRepository';

@injectable()
class UpdateCityUseCase {
  constructor(
    @inject('CityRepositoryImpl')
    private repository: ICityRepository
  ) {}
  async execute({ id, name }: IUpdateCityDTO) {
    const cityExists = await this.repository.show({ id });
    if (!cityExists) {
      throw new AppError(errorsMessages.cityNotFound, 401);
    }

    const update = await this.repository.update({
      id: cityExists.id,
      name,
    });

    return update;
  }
}

export { UpdateCityUseCase };
