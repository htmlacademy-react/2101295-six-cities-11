import { createReducer } from '@reduxjs/toolkit';
import { changeSelectedCityAction, loadOffers, changeSortType, setOffersDataLoadingStatus, requireAuthorization, loadCurrentOffer} from './action';
import { Offer } from '../types/offers/offers';
import { City } from '../types/offers/offers';
import { AuthorizationStatus, CITIES } from '../const/const';


const initialState: {
  city: City;
  offers: Offer[];
  typeSort: string;
  error: null | string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentOffer?: Offer;
} = {
  city: CITIES[0],
  offers: [],
  typeSort: 'Popular',
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.typeSort = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    });

});

