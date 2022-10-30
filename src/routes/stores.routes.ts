import { city } from '~/helpers/validators/city';
import { AllStoresController } from '~/modules/stores/useCases/allStores/AllStoresController';
import { CreateStoresController } from '~/modules/stores/useCases/createStores/CreateStoreController';
import { GetStoreController } from '~/modules/stores/useCases/getStore/GetStoreController';
import { RemoveStoreController } from '~/modules/stores/useCases/removeStore/RemoveStoreController';
import { UpdateStoresController } from '~/modules/stores/useCases/updateStore/UpdateStoreController';
import Router from 'express';

const router = Router();

router.post('/store', city, new CreateStoresController().handle);

router.get('/store/:id', new GetStoreController().handle);
router.get('/stories', new AllStoresController().handle);

router.put('/store/:storeId', new UpdateStoresController().handle);

router.delete('/store/:id', new RemoveStoreController().handle);
export default router;
