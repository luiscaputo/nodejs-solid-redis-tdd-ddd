import { inject, injectable } from 'tsyringe';

import { ICategoryRepository } from '../../repositories/ICategoryRepository';

@injectable()
class AllCategoriesUseCase {
  constructor(
    @inject('CategoryRepositoryImpl')
    private repository: ICategoryRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllCategoriesUseCase };
