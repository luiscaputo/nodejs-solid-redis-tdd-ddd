interface ICreatePurchasePlacesDTO {
  name: string;
}

interface IUpdatePurchasePlacesDTO {
  id: string;
  name?: string;
}

export { ICreatePurchasePlacesDTO, IUpdatePurchasePlacesDTO };
