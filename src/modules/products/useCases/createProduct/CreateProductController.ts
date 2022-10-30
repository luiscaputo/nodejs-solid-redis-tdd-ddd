import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateProductUseCase);

    const {
      status,
      importedT,
      url,
      creator,
      lastModifiedAt,
      productName,
      quantity,
      label,
      ingredientsText,
      traces,
      servingSize,
      servingQuantity,
      nutriscoreCore,
      nutricoreGrade,
      mainCategory,
      categoryId,
      cityId,
      storeId,
      brandsId,
    } = req.body;

    const { file } = req;

    const product = await useCase.execute({
      status,
      importedT,
      url,
      creator,
      lastModifiedAt,
      productName,
      quantity,
      label,
      ingredientsText,
      traces,
      servingSize,
      servingQuantity,
      nutriscoreCore,
      nutricoreGrade,
      mainCategory,
      imageUrl: file ? file.path.substring('uploads/'.length) : '',
      categoryId,
      cityId,
      storeId,
      brandsId,
    });

    return res.status(200).json({
      success: true,
      data: product,
    });
  }
}

export { CreateProductController };
