import { IPurchasePlacesRepository } from '~/modules/purchasePlaces/repositories/IPurcasePlacesRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICityRepository } from '../../repositories/ICityRepository';

type IRequestBody = {
  name: string;
  purchasePlacesId: string;
};

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CityRepositoryImpl')
    private repository: ICityRepository,
    @inject('PurchasePlacesRepositoryImpl')
    private pRepository: IPurchasePlacesRepository
  ) {}
  async execute({ name, purchasePlacesId }: IRequestBody) {
    const alreadyExistsThisCityName = await this.repository.findByName({
      name,
    });
    if (alreadyExistsThisCityName) {
      throw new AppError(errorsMessages.cityAlreadyExists, 401);
    }

    const purchasePlaces = await this.pRepository.show({
      id: purchasePlacesId,
    });
    if (!purchasePlaces) {
      throw new AppError(errorsMessages.productNotFound, 401);
    }
    const city = await this.repository.create({
      name,
      purchasePlacesId: purchasePlaces,
    });

    return city;
  }
}

export { CreateCityUseCase };
