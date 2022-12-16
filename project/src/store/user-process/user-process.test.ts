import { AuthorizationStatus } from '../../const/const';
import { UserProcess } from '../../types/state/state';
import { makeFakeUserData } from '../../utils/utils';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { userProcess } from './user-process';

const userData = makeFakeUserData();

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      authData: '',
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        authData: '',
      });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" and fill user data if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: userData }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          authData: userData,
        });
    });

    it('should update authorizationStatus to "NO_AUTH" and update user data to "null" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          authData: '',
        });
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" and fill user data if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: userData }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          authData: userData,
        });
    });
    it('should update authorizationStatus to "NO_AUTH" and update user data to "null" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          authData: '',
        });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" and update user data to "null" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          authData: '',
        });
    });
  });
});
