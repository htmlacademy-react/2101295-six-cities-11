import MainPages from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import FavoritesScreen from '../../pages/favorites/favorites';
import Property from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found/not-found';
import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
              <PrivateRoute>
                <FavoritesScreen/>
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
