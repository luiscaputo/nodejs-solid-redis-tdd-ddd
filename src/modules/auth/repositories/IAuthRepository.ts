import { Users } from '../../../models/Users';
import { ICreateAccountDTO } from '../dtos';

interface IAuthRepository {
  create({ email, password, admin, name }: ICreateAccountDTO): Promise<Users>;
}

export { IAuthRepository };
