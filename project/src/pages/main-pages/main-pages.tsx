import { useState } from 'react';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offer-list';
import SortForm from '../../components/sorting-places/sorting-places';
import { OfferOnMain } from '../../const/const';
import CitiesList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks/index';
import { Offer } from '../../types/offers/offers';


function MainPages(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.typeSort);
  //пока-что не знаю куда эту функцию вынести, позже поди заведу компонент utilits
  const getSortedOffers = function (offers: Offer[], type: number) {
    switch (type) {
      case 2: return offers.sort((a, b) => a.price - b.price);
      case 3: return offers.sort((a, b) => b.price - a.price);
      case 4: return offers.sort((a, b) => a.rating - b.rating);
      default: return offers;
    }
  };

  const offersBeforeSort = (useAppSelector((state) => state.offers)).filter((offer) => offer.city.title === city.title);
  const offersAfterSort = getSortedOffers(offersBeforeSort, sortType);


  const [currentOffer, setActiveOffer] = useState<number | null>(null);
  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href='/'>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersAfterSort.length} places to stay in {city.title}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offersAfterSort}
                  wrapperClassName={'cities__places-list places__list tabs__content'}
                  classList={OfferOnMain}
                  onOfferMouseEnter={handleOfferMouseEnter}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className={'cities__map'}
                city={city}
                selectedPoint={currentOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPages;

