import { createAction } from '@reduxjs/toolkit';
import {offers} from '../mocks/offers/offers';
import {City} from '../types/offers/offers';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));

export const setOffers = createAction('offers/setOffers', (city: string) => ({
  payload: {
    offers: offers.filter((offer) => offer.city.title === city),
  },
}));

export const sortOffersPriceLow = createAction('sort/sortOffersPriceLow');
