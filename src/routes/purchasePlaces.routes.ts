import { purchasePlaces } from '~/helpers/validators/purchasePlaces';
import { AllPurchasePlacesController } from '~/modules/purchasePlaces/useCases/allPurchasePlaces/AllPurchasePlacesController';
import { CreatePurchasePlacesController } from '~/modules/purchasePlaces/useCases/createPurchasePlaces/CreatePurchasePlacesController';
import { GetPurchasePlacesController } from '~/modules/purchasePlaces/useCases/getPurchasePlaces/GetPurchasePlacesController';
import { RemovePurchasePlacesController } from '~/modules/purchasePlaces/useCases/removePurchasePlaces/RemovePurchasePlacesController';
import { UpdatePurchasePlacesController } from '~/modules/purchasePlaces/useCases/updatePurchasePlaces/UpdatePurchasePlacesController';
import Router from 'express';

const router = Router();

router.post(
  '/purchasePlace',
  purchasePlaces,
  new CreatePurchasePlacesController().handle
);

router.get('/purchasePlace/:id', new GetPurchasePlacesController().handle);
router.get('/purchasePlaces', new AllPurchasePlacesController().handle);

router.put(
  '/purchasePlace/:purchasePlaceId',
  new UpdatePurchasePlacesController().handle
);

router.delete(
  '/purchasePlaces/:id',
  new RemovePurchasePlacesController().handle
);
export default router;
