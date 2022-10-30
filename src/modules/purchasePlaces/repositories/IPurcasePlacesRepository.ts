import { PurchasePlaces } from '~/models/PurchasePlaces';

import { IUpdatePurchasePlacesDTO } from '../dtos';

interface IPurchasePlacesRepository {
  index(): Promise<PurchasePlaces[]>;
  show({ id }: { id: string }): Promise<PurchasePlaces | null>;
  create({ name }: { name: string }): Promise<PurchasePlaces>;
  update({
    id,
    name,
  }: IUpdatePurchasePlacesDTO): Promise<PurchasePlaces | unknown>;
  remove({ id }: { id: string }): Promise<PurchasePlaces | unknown>;
  findByName({ name }: { name: string }): Promise<PurchasePlaces | null>;
}

export { IPurchasePlacesRepository };
