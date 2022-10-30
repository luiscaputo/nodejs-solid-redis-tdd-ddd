import { AppDataSource } from '~/configs/db';
import { Users } from '~/models/Users';
import { Repository } from 'typeorm';

import { IFindUserDTO, IFindUserByIdDTO, IUpdateUserDTO } from '../../dtos';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryImpl implements IUsersRepository {
  private model: Repository<Users>;
  constructor() {
    this.model = AppDataSource.getRepository(Users);
  }
  index(): Promise<Users[]> {
    return this.model.find();
  }
  findUserByEmail({ email }: IFindUserDTO): Promise<Users | null> {
    return this.model.findOne({ where: { email } });
  }
  findUserById({ id }: IFindUserByIdDTO): Promise<Users | null> {
    return this.model.findOne({ where: { id } });
  }
  async updateUser({
    id,
    name,
    email,
    admin,
    password,
  }: IUpdateUserDTO): Promise<Users | null> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    user.email = email ?? user.email;
    user.password = password ?? user.password;
    user.name = name ?? user.name;
    user.admin = admin ?? user.admin;

    return this.model.save(user);
  }
}

export { UsersRepositoryImpl };
