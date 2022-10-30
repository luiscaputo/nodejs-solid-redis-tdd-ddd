import { AppDataSource } from '~/configs/db';
import { Categories } from '~/models/Categories';
import { Repository } from 'typeorm';

import { IUpdateCategoryDTO } from '../../dtos';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepositoryImpl implements ICategoryRepository {
  private model: Repository<Categories>;
  constructor() {
    this.model = AppDataSource.getRepository(Categories);
  }
  index(): Promise<Categories[]> {
    return this.model.find();
  }
  show({ id }: { id: string }): Promise<Categories | null> {
    return this.model.findOne({ where: { id } });
  }
  async create({ name }: { name: string }): Promise<Categories> {
    const category = this.model.create({
      name,
    });
    return this.model.save(category);
  }
  update({ id, name }: IUpdateCategoryDTO): Promise<Categories | unknown> {
    return this.model
      .createQueryBuilder()
      .update(Categories)
      .set({ name })
      .where('id = :id', { id })
      .execute();
  }
  remove({ id }: { id: string }): Promise<Categories | unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(Categories)
      .where('id = :id', { id })
      .execute();
  }
  findByName({ name }: { name: string }): Promise<Categories | null> {
    return this.model.findOne({ where: { name } });
  }
}

export { CategoryRepositoryImpl };
