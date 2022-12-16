//import { AuthorizationStatus } from '../../const/const';
import { DataProcess } from '../../types/state/state';
import { makeFakeComments, makeFakeOffer, makeFakeOffers, makeMockNearbyOffers } from '../../utils/utils';
//import { makeFakeUserData } from '../../utils/utils';
import { addFavoriteOfferAction, fetchCurrentOfferAction, fetchNearbyOffersAction, fetchOffersAction, fetchReviewListAction, removeFavoriteOfferAction, sendNewReviewAction } from '../api-action';
import { dataProcess } from './data-process';

describe('Reducer: data', () => {
  let state: DataProcess;

  beforeEach(() => {
    state = {
      offers: [],
      nearbyOffers: [],
      reviews: [],
      isDataLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        reviews: [],
        isDataLoading: false,
      });
  });

  describe('fetchOffersAction test', () => {
    it('should update isDataLoading to "true"', () => {
      expect(dataProcess.reducer(state, { type: fetchOffersAction.pending.type }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: [],
          isDataLoading: true,
        });
    });
    it('should update isDataLoading to "false" and load mockOffers', () => {
      const mockOffers = makeFakeOffers();
      expect(dataProcess.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: mockOffers }))
        .toEqual({
          offers: mockOffers,
          nearbyOffers: [],
          reviews: [],
          isDataLoading: false,
        });
    });
  });
  describe('fetchCurrentOfferAction test', () => {
    it('should update isDataLoading to "true" if fetchCurrentOfferAction.pending', () => {
      expect(dataProcess.reducer(state, { type: fetchCurrentOfferAction.pending.type, }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: [],
          isDataLoading: true,
        });
    });
    it('should update isDataLoading to "false" and load mockCurrentOffer', () => {
      const mockCurrentOffer = makeFakeOffer(1);
      expect(dataProcess.reducer(state, { type: fetchCurrentOfferAction.fulfilled.type, payload: mockCurrentOffer }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: [],
          isDataLoading: false,
          currentOffer: mockCurrentOffer,
        });
    });
  });
  describe('fetchNearbyOffersAction test', () => {
    it('should update isDataLoading to "true" if fetchNearbyOffersAction.pending', () => {
      expect(dataProcess.reducer(state, { type: fetchNearbyOffersAction.pending.type }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: [],
          isDataLoading: true,
        });
    });

    it('should update isDataLoading to "false" and load mockNerbyOffers if fetchNearbyOffersAction.fulfilled', () => {
      const mockNearbyOffers = makeMockNearbyOffers();
      expect(dataProcess.reducer(state, { type: fetchNearbyOffersAction.fulfilled.type, payload: mockNearbyOffers }))
        .toEqual({
          offers: [],
          nearbyOffers: mockNearbyOffers,
          reviews: [],
          isDataLoading: false,
        });
    });
  });
  describe('fetchReviewListAction test', () => {
    it('should update isDataLoading to "true" if fetchReviewListAction.pending', () => {
      expect(dataProcess.reducer(state, { type: fetchReviewListAction.pending.type }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: [],
          isDataLoading: true,
        });
    });

    it('should update isDataLoading to "false" and load mockReviws if fetchReviewListAction.fulfilled', () => {
      const mockReviws = makeFakeComments();
      expect(dataProcess.reducer(state, { type: fetchReviewListAction.fulfilled.type, payload: mockReviws }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: mockReviws,
          isDataLoading: false,
        });
    });
  });
  describe('sendNewReviewAction test', () => {

    it('should load mockReviws if sendNewReviewAction.fulfilled', () => {
      const mockReviws = makeFakeComments();
      expect(dataProcess.reducer(state, { type: sendNewReviewAction.fulfilled.type, payload: mockReviws }))
        .toEqual({
          offers: [],
          nearbyOffers: [],
          reviews: mockReviws,
          isDataLoading: false,
        });
    });
  });
  describe('removeFavoriteOfferAction test', () => {

    it('should load mockReviws if removeFavoriteOfferAction.fulfilled', () => {
      const changeOffer = makeFakeOffer(1);
      expect(dataProcess.reducer(state, { type: removeFavoriteOfferAction.fulfilled.type, payload: changeOffer }))
        .toEqual({
          offers: state.offers.map((it) => it.id === changeOffer.id ? changeOffer : it),
          nearbyOffers: state.nearbyOffers.map((it) => it.id === changeOffer.id ? changeOffer : it),
          reviews: [],
          isDataLoading: false,
        });
    });
  });
  describe('addFavoriteOfferAction test', () => {

    it('should load mockReviws if addFavoriteOfferAction.fulfilled', () => {
      const changeOffer = makeFakeOffer(1);
      expect(dataProcess.reducer(state, { type: addFavoriteOfferAction.fulfilled.type, payload: changeOffer }))
        .toEqual({
          offers: state.offers.map((it) => it.id === changeOffer.id ? changeOffer : it),
          nearbyOffers: state.nearbyOffers.map((it) => it.id === changeOffer.id ? changeOffer : it),
          reviews: [],
          isDataLoading: false,
        });
    });
  });
});
