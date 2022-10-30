import { Brands } from '~/models/Brands';
import { Categories } from '~/models/Categories';
import { Cities } from '~/models/Cities';
import { Stores } from '~/models/Stores';

interface ICreateProductDTO {
  code: string;
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
}

interface IGetProductDTO {
  id: string;
}

interface IRemoveProductDTO {
  id: string;
}

interface IUpdateProductDTO {
  id: string;
  code?: string;
  status?: string;
  importedT?: Date;
  url?: string;
  creator?: string;
  lastModifiedAt?: Date;
  productName?: string;
  quantity?: number;
  label?: string;
  ingredientsText?: string;
  traces?: string;
  servingSize?: number;
  servingQuantity?: number;
  nutriscoreCore?: string;
  nutricoreGrade?: string;
  mainCategory?: string;
  imageUrl?: string;
  categoryId?: Categories;
  cityId?: Cities;
  storeId?: Stores;
  brandsId?: Brands;
}

export {
  ICreateProductDTO,
  IGetProductDTO,
  IRemoveProductDTO,
  IUpdateProductDTO,
};
