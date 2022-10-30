import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import { inject, injectable } from 'tsyringe';

import { IUpdateCategoryDTO } from '../../dtos';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject('CategoryRepositoryImpl')
    private repository: ICategoryRepository
  ) {}
  async execute({ id, name }: IUpdateCategoryDTO) {
    const categoryExists = await this.repository.show({ id });
    if (!categoryExists) {
      throw new AppError(errorsMessages.categoryNotFound, 401);
    }

    const update = await this.repository.update({
      id: categoryExists.id,
      name,
    });

    return update;
  }
}

export { UpdateCategoryUseCase };
