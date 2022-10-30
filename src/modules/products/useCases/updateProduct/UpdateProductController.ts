import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IRequest, UpdateProductUseCase } from './UpdateProductUseCase';

class UpdateProductController {
  async handle(
    req: Request<unknown, unknown, IRequest>,
    res: Response
  ): Promise<Response> {
    const useCase = container.resolve(UpdateProductUseCase);

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
    const { code } = req.params;

    const product = await useCase.execute({
      code,
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

export { UpdateProductController };
