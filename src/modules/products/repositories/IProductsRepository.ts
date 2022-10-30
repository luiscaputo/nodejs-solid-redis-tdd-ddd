import { Products } from '~/models/Products';

import { ICreateProductDTO, IUpdateProductDTO } from '../dtos';

interface IProductsRepository {
  index(): Promise<Products[]>;
  show({ code }: { code: string }): Promise<Products | null>;
  create({
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
  }: ICreateProductDTO): Promise<Products>;
  update({
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
  }: IUpdateProductDTO): Promise<Products | unknown>;
  remove({ code }: { code: string }): Promise<Products | unknown>;
  findByName({
    productName,
  }: {
    productName: string;
  }): Promise<Products | null>;
  findById({ id }: { id: string }): Promise<Products | null>;
}

export { IProductsRepository };
