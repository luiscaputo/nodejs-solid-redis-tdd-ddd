interface ICreateCategoryDTO {
  name: string;
}

interface IUpdateCategoryDTO {
  id: string;
  name?: string;
}

export { ICreateCategoryDTO, IUpdateCategoryDTO };
