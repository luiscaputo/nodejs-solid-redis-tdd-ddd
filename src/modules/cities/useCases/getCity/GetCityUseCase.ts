import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICityRepository } from '../../repositories/ICityRepository';

type IRequest = {
  id: string;
};

@injectable()
class GetCityUseCase {
  constructor(
    @inject('CityRepositoryImpl')
    private repository: ICityRepository
  ) {}
  async execute({ id }: IRequest) {
    const city = await this.repository.show({
      id,
    });
    if (!city) {
      throw new AppError(errorsMessages.cityNotFound, 401);
    }
    return city;
  }
}

export { GetCityUseCase };
