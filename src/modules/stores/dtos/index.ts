interface ICreateStoresDTO {
  name: string;
}

interface IUpdateStoresDTO {
  id: string;
  name?: string;
}

export { ICreateStoresDTO, IUpdateStoresDTO };
