import { IPurchasePlacesRepository } from '~/modules/purchasePlaces/repositories/IPurcasePlacesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class AllPurchasePlacesUseCase {
  constructor(
    @inject('PurchasePlacesRepositoryImpl')
    private repository: IPurchasePlacesRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllPurchasePlacesUseCase };
