import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IBrandsRepository } from '../../repositories/IBrandsRepository';

type IRequest = {
  id: string;
};

@injectable()
class GetBrandsUseCase {
  constructor(
    @inject('BrandsRepositoryImpl')
    private repository: IBrandsRepository
  ) {}
  async execute({ id }: IRequest) {
    const brands = await this.repository.show({
      id,
    });
    if (!brands) {
      throw new AppError(errorsMessages.brandsNotFound, 401);
    }
    return brands;
  }
}

export { GetBrandsUseCase };
