import { inject, injectable } from 'tsyringe';

import { IStoresRepository } from '../../repositories/IStoresRepository';

type IRequest = {
  id: string;
};

@injectable()
class RemoveStoreUseCases {
  constructor(
    @inject('StoreRepositoryImpl')
    private repository: IStoresRepository
  ) {}
  async execute({ id }: IRequest) {
    return this.repository.remove({ id });
  }
}

export { RemoveStoreUseCases };
