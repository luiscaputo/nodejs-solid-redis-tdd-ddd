import { ICategoryRepository } from '~/modules/categories/repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';

type IRequest = {
  id: string;
};

@injectable()
class RemoveCategoryUseCases {
  constructor(
    @inject('CategoryRepositoryImpl')
    private repository: ICategoryRepository
  ) {}
  async execute({ id }: IRequest) {
    return this.repository.remove({ id });
  }
}

export { RemoveCategoryUseCases };
