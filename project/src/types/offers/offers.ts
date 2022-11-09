export type Offer = {
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  };

export type DateForCards = {
  forArticle: string;
  forInfo: string;
  forWrap: string;
  width: string;
  hight: string;
}

