import { createAction } from '@reduxjs/toolkit';
import {City} from '../types/offers/offers';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));

export const sortOffersPriceLow = createAction('sort/sortOffersPriceLow');
