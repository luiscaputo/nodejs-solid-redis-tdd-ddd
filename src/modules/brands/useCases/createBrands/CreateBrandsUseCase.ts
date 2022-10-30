import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICreateBrandsDTO } from '../../dtos';
import { IBrandsRepository } from '../../repositories/IBrandsRepository';

@injectable()
class CreateBrandsUseCase {
  constructor(
    @inject('BrandsRepositoryImpl')
    private repository: IBrandsRepository
  ) {}
  async execute({ name }: ICreateBrandsDTO) {
    const alreadyExistsThisBrandsName = await this.repository.findByName({
      name,
    });
    if (alreadyExistsThisBrandsName) {
      throw new AppError(errorsMessages.brandsAlreadyExists, 401);
    }
    const brands = await this.repository.create({ name });

    return brands;
  }
}

export { CreateBrandsUseCase };
