import { inject, injectable } from 'tsyringe';

import { IBrandsRepository } from '../../repositories/IBrandsRepository';

type IRequest = {
  id: string;
};

@injectable()
class RemoveBrandsUseCases {
  constructor(
    @inject('BrandsRepositoryImpl')
    private repository: IBrandsRepository
  ) {}
  async execute({ id }: IRequest) {
    return this.repository.remove({ id });
  }
}

export { RemoveBrandsUseCases };
