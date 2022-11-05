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

export const RATING_VALUES = {
  OneStar: {
    min: 1,
    max: 1.4
  },
  TwoStars: {
    min: 1.5,
    max: 2.4
  },
  ThreeStars: {
    min: 2.5,
    max: 3.4
  },
  FourStars: {
    min: 3.5,
    max: 4.4
  },
  FiveStars: {
    min: 4.5,
    max: 5
  }
};

export const enum RateValues {
  Twenty = 20,
  Fourty = 40,
  Sixty = 60,
  Eighty = 80,
  Hundred = 100
}
