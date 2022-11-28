import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const/const';
import {City} from '../types/offers/offers';
import { Offer} from '../types/offers/offers';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const setError = createAction<string | null>('game/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const changeSortType = createAction<number>('offers/typeSort');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
