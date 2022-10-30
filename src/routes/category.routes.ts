import { category } from '~/helpers/validators/category';
import { AllCategoriesController } from '~/modules/categories/useCases/allCategories/AllCategoriesController';
import { CreateCategoryController } from '~/modules/categories/useCases/createCategory/CreateCategoryController';
import { GetCategoryController } from '~/modules/categories/useCases/getCategory/GetCategoryController';
import { RemoveCategoryController } from '~/modules/categories/useCases/removeCategory/RemoveCategoryController';
import { UpdateCategoryController } from '~/modules/categories/useCases/updateCategory/UpdateCategoryController';
import Router from 'express';

const router = Router();

router.post('/category', category, new CreateCategoryController().handle);

router.get('/category/:id', new GetCategoryController().handle);
router.get('/categories', new AllCategoriesController().handle);

router.put('/category/:categoryId', new UpdateCategoryController().handle);

router.delete('/category/:id', new RemoveCategoryController().handle);
export default router;
