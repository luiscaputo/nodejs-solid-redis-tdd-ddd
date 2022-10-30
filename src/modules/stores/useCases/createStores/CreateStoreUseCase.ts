import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICreateStoresDTO } from '../../dtos';
import { IStoresRepository } from '../../repositories/IStoresRepository';

@injectable()
class CreateStoresUseCase {
  constructor(
    @inject('StoresRepositoryImpl')
    private repository: IStoresRepository
  ) {}
  async execute({ name }: ICreateStoresDTO) {
    const alreadyExistsThisStoresName = await this.repository.findByName({
      name,
    });
    if (alreadyExistsThisStoresName) {
      throw new AppError(errorsMessages.storesAlreadyExists, 401);
    }
    const Stores = await this.repository.create({ name });

    return Stores;
  }
}

export { CreateStoresUseCase };
