import { createReducer } from '@reduxjs/toolkit';
import { changeSelectedCityAction, loadOffers, changeSortType, setError, setOffersDataLoadingStatus} from './action';
import { Offer } from '../types/offers/offers';
import { City } from '../types/offers/offers';
import { CITIES } from '../const/const';


const initialState: {
  city: City;
  offers: Offer[];
  typeSort: number;
  error: null | string;
  isOffersDataLoading: boolean;
} = {
  city: CITIES[0],
  offers: [],
  typeSort: 1,
  error: null,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.typeSort = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

