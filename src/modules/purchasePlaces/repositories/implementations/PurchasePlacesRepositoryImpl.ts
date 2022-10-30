import { AppDataSource } from '~/configs/db';
import { PurchasePlaces } from '~/models/PurchasePlaces';
import { Repository } from 'typeorm';

import { IUpdatePurchasePlacesDTO } from '../../dtos';
import { IPurchasePlacesRepository } from '../IPurcasePlacesRepository';

class PurchasePlacesRepositoryImpl implements IPurchasePlacesRepository {
  private model: Repository<PurchasePlaces>;
  constructor() {
    this.model = AppDataSource.getRepository(PurchasePlaces);
  }
  index(): Promise<PurchasePlaces[]> {
    return this.model.find();
  }
  show({ id }: { id: string }): Promise<PurchasePlaces | null> {
    return this.model.findOne({ where: { id } });
  }
  async create({ name }: { name: string }): Promise<PurchasePlaces> {
    const PurchasePlaces = this.model.create({
      name,
    });
    return this.model.save(PurchasePlaces);
  }
  update({
    id,
    name,
  }: IUpdatePurchasePlacesDTO): Promise<PurchasePlaces | unknown> {
    return this.model
      .createQueryBuilder()
      .update(PurchasePlaces)
      .set({ name })
      .where('id = :id', { id })
      .execute();
  }
  remove({ id }: { id: string }): Promise<PurchasePlaces | unknown> {
    return this.model
      .createQueryBuilder()
      .delete()
      .from(PurchasePlaces)
      .where('id = :id', { id })
      .execute();
  }
  findByName({ name }: { name: string }): Promise<PurchasePlaces | null> {
    return this.model.findOne({ where: { name } });
  }
}

export { PurchasePlacesRepositoryImpl };
