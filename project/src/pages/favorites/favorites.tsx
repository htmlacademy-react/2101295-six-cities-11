import OffersList from '../../components/offer-list/offer-list';
import { Helmet } from 'react-helmet-async';
import {OfferOnFavorites} from '../../const/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getFavoritesOffers } from '../../store/favorites-pprocess/selector';
import { fetchFavoritesOffersAction } from '../../store/api-action';
import { useEffect } from 'react';
import Header from '../../components/header/header';

function FavoritesScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  },[dispatch]);

  const offers = useAppSelector(getFavoritesOffers);

  //const favoritesOffer = offers.filter((offer) => offer.isFavorite === true);
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
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <OffersList wrapperClassName={'favorites__places'} classList={OfferOnFavorites} offers={offers}/>
              </li>
            </ul>
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
