import {NameSpace} from '../../const/const';
import {State} from '../../types/state/state';
import {Offer} from '../../types/offers/offers';
import { Review } from '../../types/reviews/reviews';


export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCurrentOffer = (state: State): Offer | undefined => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getStatusLoadedData = (state: State): boolean => state[NameSpace.Data].isDataLoading;
