import { offerCardConfig } from '../types/offers/offers';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*',
}

export enum LengthComment {
  Min = 50,
  Max = 300
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MARKER = {
  DEFAULT: '/img/pin.svg',
  CURRENT: '/img/pin-active.svg',
} as const;

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
} as const;

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
} as const;


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
} as const;


export const CITIES = [
  { name: 'Paris', location: {latitude: 48.85661, longitude: 2.351499, zoom: 10, }},
  { name: 'Cologne', location: {latitude: 50.935173, longitude: 6.953101, zoom: 10, }},
  { name: 'Brussels', location: {latitude: 50.8505, longitude: 4.3488, zoom: 10, }},
  { name: 'Amsterdam', location: {latitude: 52.370216, longitude: 4.895168, zoom: 10, }},
  { name: 'Hamburg', location: {latitude: 53.551086, longitude: 9.993682, zoom: 10, }},
  { name: 'Dusseldorf', location: {latitude: 51.233334, longitude: 6.783333, zoom: 10, }},
] as const;

export const SORT_TYPES = [
  {type: 'Popular' },
  {type: 'Price: low to high' },
  {type: 'Price: high to low' },
  {type: 'Top rated first' }
] as const;


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

export const starsData = [
  { value: '1', id: '1-star', title: 'terribly' },
  { value: '2', id: '2-stars', title: 'badly' },
  { value: '3', id: '3-stars', title: 'not bad' },
  { value: '4', id: '4-stars', title: 'good' },
  { value: '5', id: '5-stars', title: 'perfect' },
] as const;

