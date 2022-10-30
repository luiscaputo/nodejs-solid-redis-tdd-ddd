import { storage } from '~/helpers/upload';
import { AllProductsController } from '~/modules/products/useCases/allProducts/AllProductsController';
import { CreateProductController } from '~/modules/products/useCases/createProduct/CreateProductController';
import { GetProductController } from '~/modules/products/useCases/getProduct/GetProductController';
import { RemoveProductsController } from '~/modules/products/useCases/removeProduct/RemoveProductController';
import { UpdateProductController } from '~/modules/products/useCases/updateProduct/UpdateProductController';
import Router from 'express';
import multer from 'multer';

const upload = multer({
  storage: storage('images/products', ''),
});

const router = Router();

router.post(
  '/product',
  upload.single('file'),
  new CreateProductController().handle
);

router.get('/product/:code', new GetProductController().handle);
router.get('/products', new AllProductsController().handle);

router.put(
  '/product/:code',
  upload.single('file'),
  new UpdateProductController().handle
);

router.delete('/product/:code', new RemoveProductsController().handle);

export default router;
