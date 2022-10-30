import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICreatePurchasePlacesDTO } from '../../dtos';
import { IPurchasePlacesRepository } from '../../repositories/IPurcasePlacesRepository';

@injectable()
class CreatePurchasePlacesUseCase {
  constructor(
    @inject('PurchasePlacesRepositoryImpl')
    private repository: IPurchasePlacesRepository
  ) {}
  async execute({ name }: ICreatePurchasePlacesDTO) {
    const alreadyExistsThisPurchasePlacesName =
      await this.repository.findByName({
        name,
      });
    if (alreadyExistsThisPurchasePlacesName) {
      throw new AppError(errorsMessages.PurchasePlacesAlreadyExists, 401);
    }
    const purchasePlaces = await this.repository.create({ name });

    return purchasePlaces;
  }
}

export { CreatePurchasePlacesUseCase };
