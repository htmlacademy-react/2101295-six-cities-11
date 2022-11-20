import {createReducer} from '@reduxjs/toolkit';
import {changeSelectedCityAction, setOffers} from './action';
import {Offer} from '../types/offers/offers';
import {offers} from '../mocks/offers/offers';
import {City} from '../types/offers/offers';
import {CITIES} from '../const/const';

const initialState: {
  city: City;
  offers: Offer[];
} = {
  city: CITIES[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

