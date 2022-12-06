import {AuthorizationStatus, NameSpace} from '../../const/const';
import {State} from '../../types/state/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
