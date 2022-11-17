export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offer = {
  city: City;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  location: {
    lat: number;
    lng: number;
    zoom: number;
    };
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
