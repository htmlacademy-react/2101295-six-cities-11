import { DataFavoriteProcess } from '../../types/state/state';
import { makeFakeOffer, makeFakeOffers } from '../../utils/utils';
import { addFavoriteOfferAction, fetchFavoritesOffersAction, removeFavoriteOfferAction } from '../api-action';
import { favoritesDataProcess } from './favorites-process';


describe('Reducer: favorites', () => {
  let state: DataFavoriteProcess;

  beforeEach(() => {
    state = {
      favoritesOffers: [],
      isOffersFavoritesDataLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(favoritesDataProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        favoritesOffers: [],
        isOffersFavoritesDataLoading: false,
      });
  });

  describe('fetchFavoritesOffersAction test', () => {
    it('should update isOffersFavoritesDataLoading to "true" if fetchFavoritesOffersAction.pending', () => {
      expect(favoritesDataProcess.reducer(state, { type: fetchFavoritesOffersAction.pending.type }))
        .toEqual({
          favoritesOffers: [],
          isOffersFavoritesDataLoading: true,
        });
    });

    it('should update isOffersFavoritesDataLoading to "false" and update favoritesOffers to mockFavoritesOffers if fetchFavoritesOffersAction.fulfilled', () => {
      const mockFavoritesOffers = makeFakeOffers();
      expect(favoritesDataProcess.reducer(state, { type: fetchFavoritesOffersAction.fulfilled.type, payload: mockFavoritesOffers }))
        .toEqual({
          favoritesOffers: mockFavoritesOffers,
          isOffersFavoritesDataLoading: false,
        });
    });
  });
  describe('removeFavoriteOfferAction test', () => {
    it('should update isOffersFavoritesDataLoading to "true" if removeFavoriteOfferAction.pending', () => {
      expect(favoritesDataProcess.reducer(state, { type: removeFavoriteOfferAction.pending.type }))
        .toEqual({
          favoritesOffers: [],
          isOffersFavoritesDataLoading: true,
        });
    });

    it('should update isOffersFavoritesDataLoading to "false" and update favoritesOffers to mockFavoritesOffers if removeFavoriteOfferAction.fulfilled', () => {
      const mockFavoriteOffer = makeFakeOffer(1);
      expect(favoritesDataProcess.reducer(state, { type: removeFavoriteOfferAction.fulfilled.type, payload: mockFavoriteOffer }))
        .toEqual({
          favoritesOffers: state.favoritesOffers.filter((offer) => offer.id !== mockFavoriteOffer.id),
          isOffersFavoritesDataLoading: false,
        });
    });
  });
  describe('addFavoriteOfferAction test', () => {
    it('should update isOffersFavoritesDataLoading to "true" if addFavoriteOfferAction.pending', () => {
      expect(favoritesDataProcess.reducer(state, { type: addFavoriteOfferAction.pending.type }))
        .toEqual({
          favoritesOffers: [],
          isOffersFavoritesDataLoading: true,
        });
    });

    it('should update isOffersFavoritesDataLoading to "false" and update favoritesOffers to mockFavoritesOffers if addFavoriteOfferAction.fulfilled', () => {
      const mockFavoriteOffer = makeFakeOffer(1);
      expect(favoritesDataProcess.reducer(state, { type: addFavoriteOfferAction.fulfilled.type, payload: mockFavoriteOffer }))
        .toEqual({
          favoritesOffers: [...state.favoritesOffers].concat([mockFavoriteOffer]),
          isOffersFavoritesDataLoading: false,
        });
    });
  });
});
