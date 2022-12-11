import { Offer } from './offers/offers';

export type AuthData = {
  login: string;
  password: string;
};

export type FavoriteOffer = {
  offer: Offer;
  status: number;
};

