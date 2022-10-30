import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IStoresRepository } from '../../repositories/IStoresRepository';

type IRequest = {
  id: string;
};

@injectable()
class GetStoreUseCase {
  constructor(
    @inject('StoresRepositoryImpl')
    private repository: IStoresRepository
  ) {}
  async execute({ id }: IRequest) {
    const purchasePlace = await this.repository.show({
      id,
    });
    if (!purchasePlace) {
      throw new AppError(errorsMessages.storeNotFound, 401);
    }
    return purchasePlace;
  }
}

export { GetStoreUseCase };
