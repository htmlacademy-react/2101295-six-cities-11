import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace, } from '../../const/const';
import { City } from '../../types/offers/offers';
import {ActionProcess} from '../../types/state/state';

const initialState: ActionProcess = {
  city: CITIES[0],
  sortType: 'Popular',
};

export const actionProcess = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    poinOutOffer: (state, action: PayloadAction<number>) => {
      state.selectedOfferId = action.payload;
    },
  },
});

export const {changeCity, changeSortType, poinOutOffer} = actionProcess.actions;
