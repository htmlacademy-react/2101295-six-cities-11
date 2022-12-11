import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { DataFavoriteProcess } from '../../types/state/state';
import { addFavoriteOfferAction, fetchFavoritesOffersAction, removeFavoriteOfferAction } from '../api-action';

const initialState: DataFavoriteProcess = {
  favoritesOffers: [],
  isOffersFavoritesDataLoading: false,
};

export const favoritesDataProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesOffersAction.pending, (state) => {
        state.isOffersFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isOffersFavoritesDataLoading = false;
      })
      .addCase(removeFavoriteOfferAction.pending, (state) => {
        state.isOffersFavoritesDataLoading = true;
      })
      .addCase(removeFavoriteOfferAction.fulfilled, (state, action) => {
        state.isOffersFavoritesDataLoading = false;
        state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== action.payload.id);
      })
      .addCase(addFavoriteOfferAction.pending, (state) => {
        state.isOffersFavoritesDataLoading = true;
      })
      .addCase(addFavoriteOfferAction.fulfilled, (state, action) => {
        state.isOffersFavoritesDataLoading = false;
        state.favoritesOffers = [...state.favoritesOffers].concat([action.payload]);
      });
  }
});

