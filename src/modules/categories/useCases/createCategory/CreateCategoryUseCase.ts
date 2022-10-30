import { ICategoryRepository } from '~/modules/categories/repositories/ICategoryRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICreateCategoryDTO } from '../../dtos';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepositoryImpl')
    private repository: ICategoryRepository
  ) {}
  async execute({ name }: ICreateCategoryDTO) {
    const alreadyExistsThisCategoryName = await this.repository.findByName({
      name,
    });
    if (alreadyExistsThisCategoryName) {
      throw new AppError(errorsMessages.categoryAlreadyExists, 401);
    }
    const category = await this.repository.create({ name });

    return category;
  }
}

export { CreateCategoryUseCase };
