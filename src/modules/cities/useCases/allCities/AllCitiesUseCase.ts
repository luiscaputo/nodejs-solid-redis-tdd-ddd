import { inject, injectable } from 'tsyringe';

import { ICityRepository } from '../../repositories/ICityRepository';

@injectable()
class AllCitiesUseCase {
  constructor(
    @inject('CityRepositoryImpl')
    private repository: ICityRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllCitiesUseCase };
