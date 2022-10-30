import { Cities } from '~/models/Cities';

import { ICreateCityDTO, IUpdateCityDTO } from '../dtos';

interface ICityRepository {
  index(): Promise<Cities[]>;
  show({ id }: { id: string }): Promise<Cities | null>;
  create({ name, purchasePlacesId }: ICreateCityDTO): Promise<Cities>;
  update({ id, name }: IUpdateCityDTO): Promise<Cities | unknown>;
  remove({ id }: { id: string }): Promise<Cities | unknown>;
  findByName({ name }: { name: string }): Promise<Cities | null>;
}

export { ICityRepository };
