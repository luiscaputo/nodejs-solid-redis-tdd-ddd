import { ICategoryRepository } from '~/modules/categories/repositories/ICategoryRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';

type IRequest = {
  id: string;
};

@injectable()
class GetCategoryUseCase {
  constructor(
    @inject('CategoryRepositoryImpl')
    private repository: ICategoryRepository
  ) {}
  async execute({ id }: IRequest) {
    const category = await this.repository.show({
      id,
    });
    if (!category) {
      throw new AppError(errorsMessages.categoryNotFound, 401);
    }
    return category;
  }
}

export { GetCategoryUseCase };
