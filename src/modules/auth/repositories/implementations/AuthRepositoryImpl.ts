import { AppDataSource } from '~/configs/db';
import { Users } from '~/models/Users';
import { Repository } from 'typeorm';

import { ICreateAccountDTO } from '../../dtos';
import { IAuthRepository } from '../IAuthRepository';

class AuthRepositoryImpl implements IAuthRepository {
  private model: Repository<Users>;
  constructor() {
    this.model = AppDataSource.getRepository(Users);
  }
  async create({
    email,
    password,
    admin,
    name,
  }: ICreateAccountDTO): Promise<Users> {
    const user = new Users();
    user.name = name;
    user.email = email;
    user.password = password;
    user.admin = admin || false;
    return this.model.save(user);
  }
}

export { AuthRepositoryImpl };
