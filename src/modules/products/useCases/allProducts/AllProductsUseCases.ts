import { inject, injectable } from 'tsyringe';

import { productStatus } from '../../../../helpers/productStatus';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@injectable()
class AllProductsUseCase {
  constructor(
    @inject('ProductsRepositoryImpl')
    private repository: IProductsRepository
  ) {}
  async execute() {
    const productsPublisheds: any[] = [];
    const products = await this.repository.index();

    products.forEach((element) => {
      if (element.status === productStatus.published) {
        productsPublisheds.push(element);
      }
    });
    return productsPublisheds;
  }
}

export { AllProductsUseCase };
