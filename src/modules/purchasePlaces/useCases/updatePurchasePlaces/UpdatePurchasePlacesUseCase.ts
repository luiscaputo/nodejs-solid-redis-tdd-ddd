import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import { inject, injectable } from 'tsyringe';

import { IUpdatePurchasePlacesDTO } from '../../dtos';
import { IPurchasePlacesRepository } from '../../repositories/IPurcasePlacesRepository';

@injectable()
class UpdatePurchasePlacesUseCase {
  constructor(
    @inject('PurchasePlacesRepositoryImpl')
    private repository: IPurchasePlacesRepository
  ) {}
  async execute({ id, name }: IUpdatePurchasePlacesDTO) {
    const purchasePlacesExists = await this.repository.show({ id });
    if (!purchasePlacesExists) {
      throw new AppError(errorsMessages.purchasePlacesNotFound, 401);
    }

    const update = await this.repository.update({
      id: purchasePlacesExists.id,
      name,
    });

    return update;
  }
}

export { UpdatePurchasePlacesUseCase };
