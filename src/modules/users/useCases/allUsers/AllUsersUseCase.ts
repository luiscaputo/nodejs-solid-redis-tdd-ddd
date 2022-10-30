import { IUsersRepository } from '~/modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class AllUsersUseCase {
  constructor(
    @inject('IUserRepositoryImpl')
    private repository: IUsersRepository
  ) {}
  execute() {
    return this.repository.index();
  }
}

export { AllUsersUseCase };
