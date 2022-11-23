import {offerCardConfig} from '../types/offers/offers';

export enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Room = '/offer/:id'
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


export const OfferOnPropety: offerCardConfig = {
  class: {
    forArticle: 'near-places__card',
    forInfo: '',
    forWrap: 'near-places__image-wrapper',
  },
  size: {
    width: '260',
    hight: '200',
  },
};

export const CITIES = [
  {title: 'Paris', lat: 48.85661, lng: 2.351499, zoom: 10,},
  {title: 'Cologne', lat: 48.85661, lng: 2.351499, zoom: 10,},
  {title: 'Brussels', lat: 48.85661, lng: 2.351499, zoom: 10,},
  {title: 'Amsterdam', lat: 52.370216, lng: 4.895168, zoom: 10,},
  {title: 'Hamburg', lat: 48.85661, lng: 2.351499, zoom: 10,},
  {title: 'Dusseldorf', lat: 48.85661, lng: 2.351499, zoom: 10,},
] as const;

export const SORT_TYPES = [
  { title: 'Popular', type: 1 },
  { title: 'Price: low to high', type: 2 },
  { title: 'Price: high to low', type: 3 },
  { title: 'Top rated first', type: 4 }
] as const;

export const URL_MARKER_DEFAULT =
  '../../../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../../../img/pin-active.svg';
