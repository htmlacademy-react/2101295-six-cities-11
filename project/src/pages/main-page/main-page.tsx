import { useEffect } from 'react';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offer-list';
import SortForm from '../../components/sorting-places/sorting-places';
import { AuthorizationStatus, OfferOnMain } from '../../const/const';
import CitiesList from '../../components/city-list/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
//import { Offer } from '../../types/offers/offers';
import Header from '../../components/header/header';
import { fetchOffersAction } from '../../store/api-action';
import { getCity } from '../../store/action-process/selector';
import LoadingScreen from '../../components/loader/loader';
import { getOffers, getOffersLoadedData } from '../../store/data-process/selector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function MainPages(): JSX.Element {

  const city = useAppSelector(getCity);
  const offers = (useAppSelector(getOffers)).filter((offer) => offer.city.name === city.name);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  },[dispatch]);


  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersLoadedData);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">places to stay in {city.name}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offers}
                  wrapperClassName={'cities__places-list places__list tabs__content'}
                  classList={OfferOnMain}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                className={'cities__map'}
                city={city}
              />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPages;

