import { AppDataSource } from '~/configs/db';
import { Brands } from '~/models/Brands';
import { Repository } from 'typeorm';

import { IUpdateBrandsDTO } from '../../dtos';
import { IBrandsRepository } from '../IBrandsRepository';

class BrandsRepositoryImpl implements IBrandsRepository {
  private model: Repository<Brands>;
  constructor() {
    this.model = AppDataSource.getRepository(Brands);
  }
  index(): Promise<Brands[]> {
    return this.model.find();
  }
  show({ id }: { id: string }): Promise<Brands | null> {
    return this.model.findOne({ where: { id } });
  }
  async create({ name }: { name: string }): Promise<Brands> {
    const brands = this.model.create({
      name,
    });
    return this.model.save(brands);
  }
  update({ id, name }: IUpdateBrandsDTO): Promise<Brands | unknown> {
    return this.model
      .createQueryBuilder()
      .update(Brands)
      .set({ name })
      .where('id = :id', { id })
      .execute();
  }
  remove({ id }: { id: string }): Promise<Brands | unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(Brands)
      .where('id = :id', { id })
      .execute();
  }
  findByName({ name }: { name: string }): Promise<Brands | null> {
    return this.model.findOne({ where: { name } });
  }
}

export { BrandsRepositoryImpl };
