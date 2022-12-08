import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {userProcess} from './user-process/user-process';
import {dataProcess} from './data-process/data-process';
import { actionProcess } from './action-process/action-process';
import { favoritesDataProcess } from './favorites-pprocess/favorites-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Action]: actionProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorite]: favoritesDataProcess.reducer,
});
