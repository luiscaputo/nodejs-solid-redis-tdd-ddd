import { AppDataSource } from '~/configs/db';
import { Products } from '~/models/Products';
import { Repository } from 'typeorm';

import { ICreateProductDTO, IUpdateProductDTO } from '../../dtos';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepositoryImpl implements IProductsRepository {
  private model: Repository<Products>;
  constructor() {
    this.model = AppDataSource.getRepository(Products);
  }
  index(): Promise<Products[]> {
    return this.model.find();
  }
  show({ code }: { code: string }): Promise<Products | null> {
    return this.model.findOne({ where: { code } });
  }
  async create({
    code,
    status,
    importedT,
    url,
    creator,
    lastModifiedAt,
    productName,
    quantity,
    label,
    ingredientsText,
    traces,
    servingSize,
    servingQuantity,
    nutriscoreCore,
    nutricoreGrade,
    mainCategory,
    imageUrl,
    categoryId,
    cityId,
    storeId,
    brandsId,
  }: ICreateProductDTO): Promise<Products> {
    const product = new Products();
    product.code = code;
    product.status = status;
    product.importedT = importedT;
    product.url = url;
    product.creator = creator;
    product.lastModifiedAt = lastModifiedAt;
    product.productName = productName;
    product.quantity = quantity;
    product.label = label;
    product.ingedientsText = ingredientsText;
    product.traces = traces;
    product.servingSize = servingSize;
    product.servingQuantity = servingQuantity;
    product.nutriscoreCore = nutriscoreCore;
    product.nutriscoreGrade = nutricoreGrade;
    product.mainCategory = mainCategory;
    product.imageUrl = imageUrl;
    product.categories = categoryId;
    product.cities = cityId;
    product.stores = storeId;
    product.brands = brandsId;
    await this.model.save(product);
    return product;
  }
  async update({
    id,
    code,
    status,
    importedT,
    url,
    creator,
    lastModifiedAt,
    productName,
    quantity,
    label,
    ingredientsText,
    traces,
    servingSize,
    servingQuantity,
    nutriscoreCore,
    nutricoreGrade,
    mainCategory,
    imageUrl,
    categoryId,
    cityId,
    storeId,
    brandsId,
  }: IUpdateProductDTO): Promise<unknown> {
    const product = await this.model.findOne({ where: { id } });
    if (!product) {
      return null;
    }
    product.code = code ?? product.code;
    product.status = status ?? product.status;
    product.importedT = importedT ?? product.importedT;
    product.url = url ?? product.url;
    product.creator = creator ?? product.creator;
    product.lastModifiedAt = lastModifiedAt ?? product.lastModifiedAt;
    product.productName = productName ?? product.productName;
    product.quantity = quantity ?? product.quantity;
    product.label = label ?? product.label;
    product.ingedientsText = ingredientsText ?? product.ingedientsText;
    product.traces = traces ?? product.traces;
    product.servingSize = servingSize ?? product.servingSize;
    product.servingQuantity = servingQuantity ?? product.servingQuantity;
    product.nutriscoreCore = nutriscoreCore ?? product.nutriscoreCore;
    product.nutriscoreGrade = nutricoreGrade ?? product.nutriscoreGrade;
    product.mainCategory = mainCategory ?? product.mainCategory;
    product.imageUrl = imageUrl ?? product.imageUrl;
    product.categories = categoryId ?? product.categories;
    product.cities = cityId ?? product.cities;
    product.stores = storeId ?? product.stores;
    product.brands = brandsId ?? product.brands;
    await this.model.save(product);
    return product;
  }
  remove({ code }: { code: string }): Promise<unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(Products)
      .where('code = :code', { code })
      .execute();
  }
  findByName({
    productName,
  }: {
    productName: string;
  }): Promise<Products | null> {
    return this.model.findOne({ where: { productName } });
  }
  findById({ id }: { id: string }): Promise<Products | null> {
    return this.model.findOne({ where: { id } });
  }
}

export { ProductsRepositoryImpl };
