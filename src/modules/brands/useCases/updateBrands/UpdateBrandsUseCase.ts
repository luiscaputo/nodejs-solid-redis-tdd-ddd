import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import { inject, injectable } from 'tsyringe';

import { IUpdateBrandsDTO } from '../../dtos';
import { IBrandsRepository } from '../../repositories/IBrandsRepository';

@injectable()
class UpdateBrandsUseCase {
  constructor(
    @inject('BrandsRepositoryImpl')
    private repository: IBrandsRepository
  ) {}
  async execute({ id, name }: IUpdateBrandsDTO) {
    const brandsExists = await this.repository.show({ id });
    if (!brandsExists) {
      throw new AppError(errorsMessages.brandsNotFound, 401);
    }

    const update = await this.repository.update({
      id: brandsExists.id,
      name,
    });

    return update;
  }
}

export { UpdateBrandsUseCase };
