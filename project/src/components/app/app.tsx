import MainPages from '../../pages/main-pages/main-pages';
import Login from '../../pages/login/login';
import FavoritesScreen from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found/not-found';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps
): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages cardsCount={cardsCount}/>}
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
              ><FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Room}/:id`}
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
