import { address, datatype, image, internet, lorem } from 'faker';
import { Offer } from '../types/offers/offers';
import { Review } from '../types/reviews/reviews';
// import { cities, DEFAULT_CITY_INDEX } from '../consts/city';
// import { OfferType } from '../consts/offer';
// import { City, Offer, Offers } from '../types/offers';
// import { Review, Reviews } from '../types/reviews';
//import { AuthUser } from '../types//types/user';
// import { getRandomNumber } from './utils';

export const makeFakeUserData = (): string => internet.email();
// export const makeFakeCity = (cityIndex?: number): City => {
//   let index: number;
//   if (cityIndex || cityIndex === 0) {
//     index = cityIndex;
//   } else {
//     index = getRandomNumber(0, cities.length - 1);
//   }

//   return {
//     location: {
//       latitude: cities[index].location.latitude,
//       longitude: cities[index].location.longitude,
//       zoom: 10,
//     },
//     name: cities[index].name,
//   };
// };

export const makeFakeOffer = (id: number): Offer => ({
  bedrooms: datatype.number(10),
  description: lorem.words(),
  goods: datatype.array(datatype.number(10)),
  host: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: lorem.word(),
  },
  id: id,
  images: [image.imageUrl()],
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude:  Number(address.longitude()),
    zoom: datatype.number(10),
  },
  maxAdults: datatype.number(10),
  previewImage: image.imageUrl(),
  price: datatype.number(5000),
  rating: datatype.number(5),
  title: lorem.words(),
  type: lorem.word(),
  city: {
    location: {
      latitude: Number(address.latitude()),
      longitude:  Number(address.longitude()),
      zoom: datatype.number(10),
    },
    name: address.cityName(),
  }
} as Offer);

export const makeFakeOffers = (): Offer[] => {
  const offers = [];
  for (let i = 0; i < datatype.number(10); i++) {
    offers.push(makeFakeOffer(i));
  }
  return offers;
};

export const makeMockNearbyOffers = (): Offer[] => {
  const nearbyoffers : Offer[] = [];
  for (let i = 0; i < datatype.number(2); i++) {
    nearbyoffers.push(makeFakeOffer(i));
  }
  return nearbyoffers;
};

export const makeFakeReview = (id: number): Review => ({
  comment: lorem.paragraph(),
  date: String(datatype.datetime()),
  id: id,
  rating: datatype.number(5),
  user: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name:  lorem.word(),
  }
} as Review);

export const makeFakeComments = (): Review[] => {
  const reviews : Review[] = [];
  for (let i = 0; i < datatype.number(10); i++) {
    reviews.push(makeFakeReview(i));
  }
  return reviews;
};
// export const makeFakeCommentText = () => lorem.word(5) + lorem.word(10) + lorem.word(25) + lorem.word(5) + lorem.word(5);
