import { inject, injectable } from 'tsyringe';

import { IPurchasePlacesRepository } from '../../repositories/IPurcasePlacesRepository';

type IRequest = {
  id: string;
};

@injectable()
class RemovePurchasePlacesUseCases {
  constructor(
    @inject('PurchasePlacesRepositoryImpl')
    private repository: IPurchasePlacesRepository
  ) {}
  async execute({ id }: IRequest) {
    return this.repository.remove({ id });
  }
}

export { RemovePurchasePlacesUseCases };
