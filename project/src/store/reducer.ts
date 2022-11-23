import { createReducer } from '@reduxjs/toolkit';
import { changeSelectedCityAction, setOffers, changeSortType} from './action';
import { Offer } from '../types/offers/offers';
import { City } from '../types/offers/offers';
import { CITIES } from '../const/const';


const initialState: {
  city: City;
  offers: Offer[];
  typeSort: number;
} = {
  city: CITIES[0],
  offers: [],
  typeSort: 1,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.typeSort = action.payload;
    });
});

