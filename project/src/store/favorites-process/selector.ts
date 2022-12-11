import {NameSpace} from '../../const/const';
import {State} from '../../types/state/state';
import {Offer} from '../../types/offers/offers';

export const getFavoritesOffers = (state: State): Offer[] => state[NameSpace.Favorite].favoritesOffers;
