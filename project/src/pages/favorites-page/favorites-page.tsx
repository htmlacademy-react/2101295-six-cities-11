import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import FavoriteNotEmpty from '../../components/favorite-not-empty/favorite-not-emty';
import { useAppSelector } from '../../hooks';
import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import { getFavoritesOffers } from '../../store/favorites-process/selector';

function FavoritesPage(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavoritesOffers);
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header/>
      {(favoritesOffers.length === 0) ? <FavoriteEmpty/> : <FavoriteNotEmpty/>}
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

export default FavoritesPage;
