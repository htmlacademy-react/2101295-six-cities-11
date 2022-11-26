import MainPages from '../../pages/main-pages/main-pages';
import Login from '../../pages/login/login';
import FavoritesScreen from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found/not-found';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
// import { useAppDispatch } from '../../hooks';
// import { loadOffers } from '../../store/action';
// import { offers } from '../../mocks/offers/offers';
function LoadingScreen(): JSX.Element {
  return (
    <p>Loading ...</p>
  );
}

//export default LoadingScreen;
function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  // const dispatch = useAppDispatch();
  // dispatch(loadOffers(offers));
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              ><FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<Property />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
