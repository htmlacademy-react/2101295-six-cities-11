import { createAction } from '@reduxjs/toolkit';
import {City} from '../types/offers/offers';
import { Offer} from '../types/offers/offers';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const changeTypeSort = createAction<number>('offers/typeSort');
