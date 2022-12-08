import { Helmet } from 'react-helmet-async';
import {useAppDispatch} from '../../hooks';
import { fetchFavoritesOffersAction } from '../../store/api-action';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import CityFavoritesList from '../../components/favorite-page-component/list-citys';

function FavoritesScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  },[dispatch]);

  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <CityFavoritesList/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
