import { createAction } from '@reduxjs/toolkit';
//import {offers} from '../mocks/offers/offers';
import {City} from '../types/offers/offers';
import { Offer} from '../types/offers/offers';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));

export const setOffers = createAction('offers/setOffers', (offers: Offer[]) => ({
  payload: {
    offers: offers
  },
}));

export const sortOffersPriceLow = createAction('offers/setOffersLow');
