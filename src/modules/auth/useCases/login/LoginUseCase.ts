import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { AppError } from '~/shared/errors/appErrors';
import { errorsMessages } from '~/shared/errors/errorsMessages';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { ILoginDTO } from '../../dtos';

@injectable()
class LoginUseCase {
  constructor(
    @inject('IUserRepositoryImpl')
    private repository: IUsersRepository
  ) {}

  async execute({ email, password }: ILoginDTO) {
    const user = await this.repository.findUserByEmail({ email });

    if (!user) {
      throw new AppError(errorsMessages.invalidUserOrEmail, 401);
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);

    if (!isPasswordEqual) {
      throw new AppError(errorsMessages.invalidUserOrEmail, 401);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '', {
      expiresIn: '7d',
    });

    const { id, name, email: e, admin } = user;

    return {
      auth: {
        type: 'jwt',
        token,
      },
      user: {
        id,
        name,
        email: e,
        admin,
      },
    };
  }
}

export { LoginUseCase };
