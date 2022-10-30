import { inject, injectable } from 'tsyringe';

import { IBrandsRepository } from '../../repositories/IBrandsRepository';

@injectable()
class AllBrandsUseCase {
  constructor(
    @inject('BrandsRepositoryImpl')
    private repository: IBrandsRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllBrandsUseCase };
