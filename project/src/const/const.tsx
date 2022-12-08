import { offerCardConfig } from '../types/offers/offers';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*',
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

export const CITIESd = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const CITIES = [
  { name: 'Paris', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
  { name: 'Cologne', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
  { name: 'Brussels', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
  { name: 'Amsterdam', location: {latitude: 52.370216, longitude: 4.895168, zoom: 10, }},
  { name: 'Hamburg', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
  { name: 'Dusseldorf', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
] as const;

export const SORT_TYPES = [
  {type: 'Popular' },
  {type: 'Price: low to high' },
  {type: 'Price: high to low' },
  {type: 'Top rated first' }
] as const;

export const URL_MARKER_DEFAULT =
  '../../../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../../../img/pin-active.svg';

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}
export enum NameSpace {
  User = 'User',
  Data = 'Data',
  Action = 'Action',
  Favorite = 'Favorite',
}
