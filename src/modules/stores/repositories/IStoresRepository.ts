import { Stores } from '~/models/Stores';

import { IUpdateStoresDTO } from '../dtos';

interface IStoresRepository {
  index(): Promise<Stores[]>;
  show({ id }: { id: string }): Promise<Stores | null>;
  create({ name }: { name: string }): Promise<Stores>;
  update({ id, name }: IUpdateStoresDTO): Promise<Stores | unknown>;
  remove({ id }: { id: string }): Promise<Stores | unknown>;
  findByName({ name }: { name: string }): Promise<Stores | null>;
}

export { IStoresRepository };
