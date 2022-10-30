import { AllUsersController } from '~/modules/users/useCases/allUsers/AllUsersController';
import Router from 'express';

const router = Router();

router.get('/users', new AllUsersController().handle);

export default router;
