import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { AppError } from '~/shared/errors/appErrors';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IChangePasswordDTO } from '../../dtos';

@injectable()
class ChangeUseCase {
  constructor(
    @inject('IUserRepositoryImpl')
    private repository: IUsersRepository
  ) {}
  async execute({ email, newPassword }: IChangePasswordDTO) {
    const user = await this.repository.findUserByEmail({ email });
    if (!user) {
      throw new AppError(errorsMessages.userNotFound, 401);
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(salt, newPassword);

    await this.repository.updateUser({
      id: user.id,
      password: hash,
    });

    return true;
  }
}

export { ChangeUseCase };
