import { CITIES } from '../../const/const';
import { ActionProcess } from '../../types/state/state';
import { actionProcess, changeCity, changeSortType, poinOutOffer } from './action-process';


describe('Reducer: favorites', () => {
  let state: ActionProcess;

  beforeEach(() => {
    state = {
      city: CITIES[0],
      sortType: 'Popular',
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(actionProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        city: CITIES[0],
        sortType: 'Popular',
      });
  });
  it('should update city acording to given value', () => {
    expect(actionProcess.reducer(state, changeCity(CITIES[4])))
      .toEqual({
        city: CITIES[4],
        sortType: 'Popular',
      });
  });
  it('should update sortType acording to given value', () => {
    expect(actionProcess.reducer(state, changeSortType('Price: low to high')))
      .toEqual({
        city: CITIES[0],
        sortType: 'Price: low to high',
      });
  });
  it('should update selectedOfferId acording to given value', () => {
    expect(actionProcess.reducer(state, poinOutOffer(4)))
      .toEqual({
        city: CITIES[0],
        sortType: 'Popular',
        selectedOfferId: 4,
      });
  });
});
