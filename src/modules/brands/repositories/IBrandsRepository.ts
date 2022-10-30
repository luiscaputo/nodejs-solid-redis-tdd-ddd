import { Brands } from '../../../models/Brands';
import { IUpdateBrandsDTO } from '../dtos';

interface IBrandsRepository {
  index(): Promise<Brands[]>;
  show({ id }: { id: string }): Promise<Brands | null>;
  create({ name }: { name: string }): Promise<Brands>;
  update({ id, name }: IUpdateBrandsDTO): Promise<Brands | unknown>;
  remove({ id }: { id: string }): Promise<Brands | unknown>;
  findByName({ name }: { name: string }): Promise<Brands | null>;
}

export { IBrandsRepository };
