import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import FavoriteNotEmptyPage from '../../components/favorite-page-component/favorite-not-empty';
import { useAppSelector } from '../../hooks';
import { getFavoritesOffers } from '../../store/favorites-pprocess/selector';
import FavoriteEmptyPage from '../../components/favorite-page-component/favorite-empty';

function FavoritesScreen(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavoritesOffers);
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header/>
      {(favoritesOffers.length === 0) ? <FavoriteEmptyPage/> : <FavoriteNotEmptyPage/>}
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
