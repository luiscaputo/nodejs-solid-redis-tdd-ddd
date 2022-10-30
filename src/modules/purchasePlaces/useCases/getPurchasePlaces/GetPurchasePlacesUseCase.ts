import { IPurchasePlacesRepository } from '~/modules/purchasePlaces/repositories/IPurcasePlacesRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';

type IRequest = {
  id: string;
};

@injectable()
class GetPurchasePlacesUseCase {
  constructor(
    @inject('PurchasePlacesRepositoryImpl')
    private repository: IPurchasePlacesRepository
  ) {}
  async execute({ id }: IRequest) {
    const purchasePlace = await this.repository.show({
      id,
    });
    if (!purchasePlace) {
      throw new AppError(errorsMessages.purchasePlacesNotFound, 401);
    }
    return purchasePlace;
  }
}

export { GetPurchasePlacesUseCase };
