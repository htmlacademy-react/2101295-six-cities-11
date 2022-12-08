import { Link } from 'react-router-dom';
import { CITIES, OfferOnFavorites } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action-process/action-process';
import { getFavoritesOffers } from '../../store/favorites-pprocess/selector';
import OffersList from '../offer-list/offer-list';

export default function CityFavoritesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getFavoritesOffers);
  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const offersThisCity = offers.filter((offer) => offer.city.name === city.name);
        if (offersThisCity.length === 0) {
          return null;
        } else {
          return (
            <li
              className="favorites__locations-items"
              key={city.name}
            >
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/" onClick={() => {
                    dispatch(changeCity(city));
                  }}
                  >
                    <span>{city.name}</span>
                  </Link>
                </div>
              </div>
              <OffersList wrapperClassName={'favorites__places'} classList={OfferOnFavorites} offers={offersThisCity} />
            </li>);
        }
      })}
    </ul>
  );


}
