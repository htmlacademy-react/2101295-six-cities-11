import {offerCardConfig} from '../types/offers/offers';

export enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Room = '/offer'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const OfferOnFavorites: offerCardConfig = {
  class: {
    forArticle: 'favorites__card',
    forInfo: 'favorites__card-info',
    forWrap: 'favorites__image-wrapper',
  },
  size: {
    width: '150',
    hight: '110',
  },
};

export const OfferOnMain: offerCardConfig = {
  class: {
    forArticle: 'cities__card',
    forInfo: '',
    forWrap: 'cities__image-wrapper',
  },
  size: {
    width: '260',
    hight: '200',
  },
};

export const URL_MARKER_DEFAULT =
  '../../../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../../../img/pin-active.svg';
