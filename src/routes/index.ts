import { isUserAuthenticated } from '~/helpers/middlewares/isUserAuthenticated';
import Router from 'express';

import authRoutes from './auth.routes';
import brandsRoutes from './brands.routes';
import categoryRoutes from './category.routes';
import citiesRoutes from './cities.routes';
import productsRoutes from './products.routes';
import purchasePlacesRoutes from './purchasePlaces.routes';
import storesRoutes from './stores.routes';
import usersRoutes from './users.routes';

const router = Router();

router.get('/', (_, res) => {
  return res.status(200).json('REST Back-end Challenge 20201209 Running');
});

router.use(authRoutes);
// authenticating private routes
router.use(isUserAuthenticated);
router.use(usersRoutes);
router.use(categoryRoutes);
router.use(citiesRoutes);
router.use(purchasePlacesRoutes);
router.use(brandsRoutes);
router.use(storesRoutes);
router.use(productsRoutes);

export default router;
