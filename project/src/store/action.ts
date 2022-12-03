import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, AppRoute } from '../const/const';
import {City} from '../types/offers/offers';
import { Offer} from '../types/offers/offers';
import { Review } from '../types/reviews/reviews';

export const changeSelectedCityAction = createAction('city/changeCity', (city: City) => ({
  payload: {
    city,
  },
}));
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const changeSortType = createAction<number>('offers/typeSort');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const loadCurrentOffer = createAction<Offer>('offer/loadOffer');
export const sendNewReview = createAction<Review[]>('data/sendNewReview');
