interface ICreateBrandsDTO {
  name: string;
}

interface IUpdateBrandsDTO {
  id: string;
  name?: string;
}

export { ICreateBrandsDTO, IUpdateBrandsDTO };
