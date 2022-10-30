import { Brands } from '~/models/Brands';
import { Cities } from '~/models/Cities';
import { Products } from '~/models/Products';
import { PurchasePlaces } from '~/models/PurchasePlaces';
import { Stores } from '~/models/Stores';
import { Users } from '~/models/Users';
import { DataSource } from 'typeorm';

import { Categories } from '../../models/Categories';

const entities = [
  Users,
  Cities,
  Categories,
  PurchasePlaces,
  Stores,
  Products,
  Brands,
];

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  logging: process.env.NODE_ENV === 'production',
  entities,
  subscribers: [],
  migrations: ['src/configs/db/migrations'],
});

export const AppDataSourceTest = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  logging: true,
  entities,
  subscribers: [],
  migrations: [],
});
