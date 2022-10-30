import { Users } from '~/models/Users';

import { IFindUserByIdDTO, IFindUserDTO, IUpdateUserDTO } from '../dtos';

interface IUsersRepository {
  findUserByEmail({ email }: IFindUserDTO): Promise<Users | null>;
  findUserById({ id }: IFindUserByIdDTO): Promise<Users | null>;
  updateUser({
    id,
    email,
    password,
    name,
    admin,
  }: IUpdateUserDTO): Promise<Users | null>;
  index(): Promise<Users[]>;
}

export { IUsersRepository };
