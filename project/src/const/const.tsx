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

export enum OfferOnFavorites {
  forArticle = 'favorites__card',
  forInfo = 'favorites__card-info',
  forWrap = 'favorites__image-wrapper',
  width = '150',
  hight = '110',
}

export enum OfferOnMain {
  forArticle = 'cities__card',
  forInfo = '',
  forWrap = 'cities__image-wrapper',
  width = '260',
  hight = '200',
}
