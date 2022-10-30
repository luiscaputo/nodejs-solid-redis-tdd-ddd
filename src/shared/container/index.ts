import { IAuthRepository } from '~/modules/auth/repositories/IAuthRepository';
import { AuthRepositoryImpl } from '~/modules/auth/repositories/implementations/AuthRepositoryImpl';
import { IBrandsRepository } from '~/modules/brands/repositories/IBrandsRepository';
import { BrandsRepositoryImpl } from '~/modules/brands/repositories/implementations/BrandsRepositoryImpl';
import { ICategoryRepository } from '~/modules/categories/repositories/ICategoryRepository';
import { CategoryRepositoryImpl } from '~/modules/categories/repositories/implementations/CategoryRepositoryImpl';
import { ICityRepository } from '~/modules/cities/repositories/ICityRepository';
import { CityRepositoryImpl } from '~/modules/cities/repositories/implementations/CityRepositoryImpl';
import { ProductsRepositoryImpl } from '~/modules/products/repositories/implementations/ProductRepositoryImpl';
import { IProductsRepository } from '~/modules/products/repositories/IProductsRepository';
import { PurchasePlacesRepositoryImpl } from '~/modules/purchasePlaces/repositories/implementations/PurchasePlacesRepositoryImpl';
import { IPurchasePlacesRepository } from '~/modules/purchasePlaces/repositories/IPurcasePlacesRepository';
import { StoresRepositoryImpl } from '~/modules/stores/repositories/implementations/StoresRepositoryImpl';
import { IStoresRepository } from '~/modules/stores/repositories/IStoresRepository';
import { UsersRepositoryImpl } from '~/modules/users/repositories/implementations/UsersRepositoryImpl';
import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'IUserRepositoryImpl',
  UsersRepositoryImpl
);

container.registerSingleton<IAuthRepository>(
  'IAuthRepositoryImpl',
  AuthRepositoryImpl
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepositoryImpl',
  CategoryRepositoryImpl
);

container.registerSingleton<ICityRepository>(
  'CityRepositoryImpl',
  CityRepositoryImpl
);

container.registerSingleton<IPurchasePlacesRepository>(
  'PurchasePlacesRepositoryImpl',
  PurchasePlacesRepositoryImpl
);

container.registerSingleton<IBrandsRepository>(
  'BrandsRepositoryImpl',
  BrandsRepositoryImpl
);

container.registerSingleton<IStoresRepository>(
  'StoresRepositoryImpl',
  StoresRepositoryImpl
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepositoryImpl',
  ProductsRepositoryImpl
);
