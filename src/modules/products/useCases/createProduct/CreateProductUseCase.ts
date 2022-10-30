import { generateProductCode } from '~/helpers/functions';
import { productStatus } from '~/helpers/productStatus';
import { Brands } from '~/models/Brands';
import { Categories } from '~/models/Categories';
import { Cities } from '~/models/Cities';
import { Stores } from '~/models/Stores';
import { IBrandsRepository } from '~/modules/brands/repositories/IBrandsRepository';
import { ICategoryRepository } from '~/modules/categories/repositories/ICategoryRepository';
import { ICityRepository } from '~/modules/cities/repositories/ICityRepository';
import { IStoresRepository } from '~/modules/stores/repositories/IStoresRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IProductsRepository } from '../../repositories/IProductsRepository';

type IRequest = {
  status: string;
  importedT: Date;
  url: string;
  creator: string;
  lastModifiedAt: Date;
  productName: string;
  quantity: number;
  label: string;
  ingredientsText: string;
  traces: string;
  servingSize: number;
  servingQuantity: number;
  nutriscoreCore: string;
  nutricoreGrade: string;
  mainCategory: string;
  imageUrl: string;
  categoryId: Categories;
  cityId: Cities;
  storeId: Stores;
  brandsId: Brands;
};

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('CategoryRepositoryImpl')
    private ccRepository: ICategoryRepository,
    @inject('CityRepositoryImpl')
    private cRepository: ICityRepository,
    @inject('StoresRepositoryImpl')
    private sRepository: IStoresRepository,
    @inject('BrandsRepositoryImpl')
    private bRepository: IBrandsRepository,
    @inject('ProductsRepositoryImpl')
    private repository: IProductsRepository
  ) {}
  async execute(props: IRequest) {
    const category = await this.ccRepository.show({ id: props.categoryId.id });
    if (!category) {
      throw new AppError(errorsMessages.categoryNotFound, 401);
    }
    const city = await this.cRepository.show({ id: props.cityId.id });
    if (!city) {
      throw new AppError(errorsMessages.cityNotFound, 401);
    }
    const store = await this.sRepository.show({ id: props.storeId.id });
    if (!store) {
      throw new AppError(errorsMessages.storeNotFound, 401);
    }
    const brands = await this.bRepository.show({ id: props.brandsId.id });
    if (!brands) {
      throw new AppError(errorsMessages.brandsNotFound, 401);
    }

    const isProductExists = await this.repository.findByName({
      productName: props.productName,
    });
    if (isProductExists) {
      throw new AppError(errorsMessages.productAlreadyExists, 401);
    }

    const product = await this.repository.create({
      code: generateProductCode().toString(),
      status: productStatus.published,
      importedT: props.importedT,
      url: props.url,
      creator: props.creator,
      lastModifiedAt: props.lastModifiedAt,
      productName: props.productName,
      quantity: props.quantity,
      label: props.label,
      ingredientsText: props.ingredientsText,
      traces: props.traces,
      servingSize: props.servingSize,
      servingQuantity: props.servingQuantity,
      nutriscoreCore: props.nutriscoreCore,
      nutricoreGrade: props.nutricoreGrade,
      mainCategory: props.mainCategory,
      imageUrl: props.imageUrl,
      categoryId: category,
      cityId: city,
      storeId: store,
      brandsId: brands,
    });

    return product;
  }
}

export { CreateProductUseCase };
