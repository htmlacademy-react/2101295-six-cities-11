import { NavigateFunction } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { addFavoriteOfferAction, removeFavoriteOfferAction } from '../store/api-action';
import { Offer } from '../types/offers/offers';
import { AppDispatch } from '../types/state/state';

export const handleButtonFavoriteClick = (offer: Offer, authorizationStatus: string, dispatch: AppDispatch, navigate: NavigateFunction): void => {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    if (offer.isFavorite) {
      dispatch(removeFavoriteOfferAction(offer.id));
    } else {
      dispatch(addFavoriteOfferAction((offer.id)));
    }

  } else {
    navigate(AppRoute.Login);
  }
};
