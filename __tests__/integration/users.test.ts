import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { container } from 'tsyringe';
import { v4 as NewId } from 'uuid';

import { CreateUserUseCase } from '../../src/modules/auth/useCases/create/CreateUserUseCase';
import { AllUsersUseCase } from '../../src/modules/users/useCases/allUsers/AllUsersUseCase';

describe('Shoud be get all user', async () => {
  it('all users', async () => {
    const getUserUseCase = container.resolve(AllUsersUseCase);
    const allUsers = await getUserUseCase.execute();
    expect([]).toBe(allUsers);
  });

  it('Shoud be create user', async () => {
    const mockUser = {
      id: NewId(),
      name: 'test test',
      email: 'test@gmail.com',
      password: await bcrypt.hash('test test', await bcrypt.genSalt(12)),
      admin: true,
    };
    const userUseCase = container.resolve(CreateUserUseCase);
    const newUser = await userUseCase.execute(mockUser);

    expect(mockUser.id).toBe(newUser.id);
  });
});
