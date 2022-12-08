import { OfferOnMain } from '../../const/const';
import OffersList from '../offer-list/offer-list';
import SortForm from '../sorting-places/sorting-places';
import Map from '../../components/map/map';
import { City, Offer } from '../../types/offers/offers';

type MainPageContent = {
  offers: Offer[];
  city: City;
}

function MainPageContent({offers, city} : MainPageContent): JSX.Element {

  return (
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
  );
}

export default MainPageContent;
