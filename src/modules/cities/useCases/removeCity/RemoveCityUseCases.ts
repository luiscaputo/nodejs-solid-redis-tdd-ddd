import { inject, injectable } from 'tsyringe';

import { ICityRepository } from '../../repositories/ICityRepository';

type IRequest = {
  id: string;
};

@injectable()
class RemoveCityUseCases {
  constructor(
    @inject('CityRepositoryImpl')
    private repository: ICityRepository
  ) {}
  async execute({ id }: IRequest) {
    return this.repository.remove({ id });
  }
}

export { RemoveCityUseCases };
