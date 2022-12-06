import {store} from '../../store/index';
import {AuthorizationStatus} from '../../const/const';
import { City, Offer } from '../offers/offers';
import { Review } from '../reviews/reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataProcess = {
  offers: Offer[];
  currentOffer?: Offer;
  nearbyOffers: Offer[];
  reviews: Review[];
  isOffersDataLoading: boolean;
};

export type ActionProcess = {
  city: City;
  sortType: string;
};
