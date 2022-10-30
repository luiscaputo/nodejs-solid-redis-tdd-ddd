import { PurchasePlaces } from '~/models/PurchasePlaces';

interface ICreateCityDTO {
  name: string;
  purchasePlacesId: PurchasePlaces;
}

interface IUpdateCityDTO {
  id: string;
  name?: string;
}

export { ICreateCityDTO, IUpdateCityDTO };
