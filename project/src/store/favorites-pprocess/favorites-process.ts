import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { DataFavoriteProcess } from '../../types/state/state';
import { fetchFavoritesOffersAction } from '../api-action';

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
      });
  }
});
