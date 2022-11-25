import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const/const';
import { Offer } from '../types/offers/offers';
import { AppDispatch, State } from '../types/state/state';
import { loadOffers , setError, setOffersDataLoadingStatus} from './action';

import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      4000,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
