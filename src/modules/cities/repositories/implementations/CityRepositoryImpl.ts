import { AppDataSource } from '~/configs/db';
import { Cities } from '~/models/Cities';
import { Repository } from 'typeorm';

import { ICreateCityDTO, IUpdateCityDTO } from '../../dtos';
import { ICityRepository } from '../ICityRepository';

class CityRepositoryImpl implements ICityRepository {
  private model: Repository<Cities>;
  constructor() {
    this.model = AppDataSource.getRepository(Cities);
  }
  index(): Promise<Cities[]> {
    return this.model.find();
  }
  show({ id }: { id: string }): Promise<Cities | null> {
    return this.model.findOne({ where: { id } });
  }
  async create({ name, purchasePlacesId }: ICreateCityDTO): Promise<Cities> {
    const City = this.model.create({
      name,
      purchasePlaces: purchasePlacesId,
    });
    return this.model.save(City);
  }
  update({ id, name }: IUpdateCityDTO): Promise<Cities | unknown> {
    return this.model
      .createQueryBuilder()
      .update(Cities)
      .set({ name })
      .where('id = :id', { id })
      .execute();
  }
  remove({ id }: { id: string }): Promise<Cities | unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(Cities)
      .where('id = :id', { id })
      .execute();
  }
  findByName({ name }: { name: string }): Promise<Cities | null> {
    return this.model.findOne({ where: { name } });
  }
}

export { CityRepositoryImpl };
