import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import { inject, injectable } from 'tsyringe';

import { IUpdateStoresDTO } from '../../dtos';
import { IStoresRepository } from '../../repositories/IStoresRepository';

@injectable()
class UpdateStoresUseCase {
  constructor(
    @inject('StoresRepositoryImpl')
    private repository: IStoresRepository
  ) {}
  async execute({ id, name }: IUpdateStoresDTO) {
    const storesExists = await this.repository.show({ id });
    if (!storesExists) {
      throw new AppError(errorsMessages.storeNotFound, 401);
    }

    const update = await this.repository.update({
      id: storesExists.id,
      name,
    });

    return update;
  }
}

export { UpdateStoresUseCase };
