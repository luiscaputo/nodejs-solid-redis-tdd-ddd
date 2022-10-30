import { change, login, recover, create } from '~/helpers/validators/users';
import { ChangeController } from '~/modules/auth/useCases/change/ChangeController';
import { CreateUserController } from '~/modules/auth/useCases/create/CreateUserController';
import { RecoverAccountController } from '~/modules/auth/useCases/recover/RecoverAccountController';
import Router from 'express';

import { LoginController } from '../modules/auth/useCases/login/LoginController';

const router = Router();

router.post('/auth/create-account', create, new CreateUserController().handle);
router.post('/auth/login', login, new LoginController().handle);

router.get('/auth/recover', recover, new RecoverAccountController().handle);
router.put('/auth/change', change, new ChangeController().handle);

export default router;
