import { SendMail } from '~/helpers/sendMail';
import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { AppError } from '~/shared/errors/appErrors';
import { inject, injectable } from 'tsyringe';

import { errorsMessages } from '../../../../shared/errors/errorsMessages';
import { IRecoverPasswordDTO } from '../../dtos';

@injectable()
class RecoverAccountUseCase {
  constructor(
    @inject('IUserRepositoryImpl')
    private repository: IUsersRepository
  ) {}
  async execute({ email }: IRecoverPasswordDTO) {
    const user = await this.repository.findUserByEmail({ email });
    if (!user) {
      throw new AppError(errorsMessages.userNotFound, 401);
    }

    await new SendMail().execute({
      to: user.email,
      subject: 'Recuperação de Conta',
      text: `Recupere sua cont aqui: ${process.env.FRONT_URL}`,
    });

    return true;
  }
}

export { RecoverAccountUseCase };
