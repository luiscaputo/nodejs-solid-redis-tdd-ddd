import { AllBrandsController } from '~/modules/brands/useCases/allBrands/AllBrandsController';
import { CreateBrandsController } from '~/modules/brands/useCases/createBrands/CreateBrandsController';
import { GetBrandsController } from '~/modules/brands/useCases/getBrands/GetBrandsController';
import { RemoveBrandsController } from '~/modules/brands/useCases/removeBrands/RemoveBrandsController';
import { UpdateBrandsController } from '~/modules/brands/useCases/updateBrands/UpdateBrandsController';
import Router from 'express';

const router = Router();

router.post('/brands', new CreateBrandsController().handle);

router.get('/brands/:id', new GetBrandsController().handle);
router.get('/brands', new AllBrandsController().handle);

router.put('/brands/:brandsId', new UpdateBrandsController().handle);

router.delete('/brands/:id', new RemoveBrandsController().handle);
export default router;
