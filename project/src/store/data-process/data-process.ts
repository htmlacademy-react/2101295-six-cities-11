import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { Offer } from '../../types/offers/offers';
import { DataProcess } from '../../types/state/state';
import { fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction, fetchReviewListAction, sendNewReviewAction, removeFavoriteOfferAction, addFavoriteOfferAction } from '../api-action';
//import { favoritesDataProcess } from '../favorites-process/favorites-process';
//import { removeFavorites } from '../favorites-pprocess/favorites-process';

const initialState: DataProcess = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  isOffersDataLoading: false,
};

const updateDataState = (state: DataProcess, action: PayloadAction<Offer>) => {
  state.offers = state.offers.map((it) => it.id === action.payload.id ? action.payload : it);
  if (state.currentOffer !== undefined && state.currentOffer.id === action.payload.id) {
    state.currentOffer = action.payload;
  }
  if (state.nearbyOffers !== undefined) {
    state.nearbyOffers = state.nearbyOffers.map((it) => it.id === action.payload.id ? action.payload : it);
  }
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchReviewListAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchReviewListAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(sendNewReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(removeFavoriteOfferAction.fulfilled, (state, action) => {
        updateDataState(state, action);
      })
      .addCase(addFavoriteOfferAction.fulfilled, (state, action) => {
        updateDataState(state, action);
      });
  }
});

