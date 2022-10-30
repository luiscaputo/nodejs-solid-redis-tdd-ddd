import { productStatus } from '~/helpers/productStatus';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IProductsRepository } from '../../repositories/IProductsRepository';

type IRequest = {
  code: string;
};

@injectable()
class RemoveProductsUseCases {
  constructor(
    @inject('ProductsRepositoryImpl')
    private repository: IProductsRepository
  ) {}
  async execute({ code }: IRequest) {
    const product = await this.repository.show({ code });
    if (!product) {
      throw new AppError(errorsMessages.productNotFound, 401);
    }
    await this.repository.update({
      id: product.id,
      status: productStatus.trash,
    });

    return true;
  }
}

export { RemoveProductsUseCases };
