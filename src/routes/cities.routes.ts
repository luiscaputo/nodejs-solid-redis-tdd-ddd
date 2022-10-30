import { city } from '~/helpers/validators/city';
import { AllCitiesController } from '~/modules/cities/useCases/allCities/AllCitiesController';
import { CreateCityController } from '~/modules/cities/useCases/createCity/CreateCityController';
import { GetCityController } from '~/modules/cities/useCases/getCity/GetCityController';
import { RemoveCityController } from '~/modules/cities/useCases/removeCity/RemoveCityController';
import { UpdateCityController } from '~/modules/cities/useCases/updateCity/UpdateCityController';
import Router from 'express';

const router = Router();

router.post('/city', city, new CreateCityController().handle);

router.get('/city/:id', new GetCityController().handle);
router.get('/categories', new AllCitiesController().handle);

router.put('/city/:cityId', new UpdateCityController().handle);

router.delete('/city/:id', new RemoveCityController().handle);
export default router;
