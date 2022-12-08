import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const/const';
import { Offer } from '../types/offers/offers';
import { AppDispatch, State } from '../types/state/state';
import { redirectToRoute } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData, FavoriteOffer } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Review, ReviewData } from '../types/reviews/reviews';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(fetchFavoritesOffersAction());
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(fetchFavoritesOffersAction());
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchFavoritesOffersAction());
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchNearbyOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchReviewListAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviewList',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const sendNewReviewAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/sendReview',
  async ({ id, rating, comment }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, { rating, comment });
    return data;
  },
);

export const fetchFavoritesOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchfavoritesOffer',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const sendFavoriteOfferAction = createAsyncThunk<Offer, FavoriteOffer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/sendStatusOffer',
  async ({id, status}, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchFavoritesOffersAction());
    return data;
  },
);
