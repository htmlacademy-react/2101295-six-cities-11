import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const/const';
import CitiesList from '../../components/city-list/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Header from '../../components/header/header';
import { fetchOffersAction } from '../../store/api-action';
import LoadingScreen from '../../components/loader/loader';
import { getOffers, getOffersLoadedData } from '../../store/data-process/selector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
//import MainPageEmpty from '../../components/main-page-components/main-page-empty';
import { getCity } from '../../store/action-process/selector';
import MainPageEmpty from '../../components/main-page-component/main-page-empty';
import MainPageContent from '../../components/main-page-component/main-page-content';
//import MainPageContent from '../../components/main-page-components/main-page-content';


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
    <div className='page page--gray page--main'>
      <Header />
      <main className={`page__main page__main--index ${(offers.length === 0) ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        {(offers.length === 0) ? <MainPageEmpty /> : <MainPageContent offers={offers} city={city}/>}
      </main>
    </div>

  );
}

export default MainPages;

