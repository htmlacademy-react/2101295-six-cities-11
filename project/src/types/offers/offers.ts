import { Review } from '../reviews/reviews';

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type CurrentOffer = {
  offer: Offer;
  offerNerby: Offer[];
  review: Review;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type offerCardConfig = {
  class: {
    forArticle: string;
    forInfo: string;
    forWrap: string;
  };
  size: {
    width: string;
    hight: string;
  };
}
