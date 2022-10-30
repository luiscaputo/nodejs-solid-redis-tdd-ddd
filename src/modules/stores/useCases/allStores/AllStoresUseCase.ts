import { inject, injectable } from 'tsyringe';

import { IStoresRepository } from '../../repositories/IStoresRepository';

@injectable()
class AllStoresUseCase {
  constructor(
    @inject('StoresRepositoryImpl')
    private repository: IStoresRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllStoresUseCase };
