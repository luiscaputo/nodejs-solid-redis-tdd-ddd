import { AppDataSource } from '~/configs/db';
import { Stores } from '~/models/Stores';
import { Repository } from 'typeorm';

import { IUpdateStoresDTO } from '../../dtos';
import { IStoresRepository } from '../IStoresRepository';

class StoresRepositoryImpl implements IStoresRepository {
  private model: Repository<Stores>;
  constructor() {
    this.model = AppDataSource.getRepository(Stores);
  }
  index(): Promise<Stores[]> {
    return this.model.find();
  }
  show({ id }: { id: string }): Promise<Stores | null> {
    return this.model.findOne({ where: { id } });
  }
  async create({ name }: { name: string }): Promise<Stores> {
    const Stores = this.model.create({
      name,
    });
    return this.model.save(Stores);
  }
  update({ id, name }: IUpdateStoresDTO): Promise<Stores | unknown> {
    return this.model
      .createQueryBuilder()
      .update(Stores)
      .set({ name })
      .where('id = :id', { id })
      .execute();
  }
  remove({ id }: { id: string }): Promise<Stores | unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(Stores)
      .where('id = :id', { id })
      .execute();
  }
  findByName({ name }: { name: string }): Promise<Stores | null> {
    return this.model.findOne({ where: { name } });
  }
}

export { StoresRepositoryImpl };
