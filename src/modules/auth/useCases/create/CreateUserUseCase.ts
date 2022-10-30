import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { AppError } from '~/shared/errors/appErrors';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { ICreateAccountDTO } from '../../dtos';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('IUserRepositoryImpl')
    private repository: IUsersRepository,
    @inject('IAuthRepositoryImpl')
    private authRepository: IAuthRepository
  ) {}
  async execute({ name, email, password, admin }: ICreateAccountDTO) {
    const user = await this.repository.findUserByEmail({ email });
    if (user) {
      throw new AppError(errorsMessages.userAlreadyExits, 401);
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await this.authRepository.create({
      name,
      email,
      password: hash,
      admin,
    });

    return newUser;
  }
}

export { CreateUserUseCase };
