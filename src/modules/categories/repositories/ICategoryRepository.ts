import { Categories } from '~/models/Categories';

import { IUpdateCategoryDTO } from '../dtos';

interface ICategoryRepository {
  index(): Promise<Categories[]>;
  show({ id }: { id: string }): Promise<Categories | null>;
  create({ name }: { name: string }): Promise<Categories>;
  update({ id, name }: IUpdateCategoryDTO): Promise<Categories | unknown>;
  remove({ id }: { id: string }): Promise<Categories | unknown>;
  findByName({ name }: { name: string }): Promise<Categories | null>;
}

export { ICategoryRepository };
