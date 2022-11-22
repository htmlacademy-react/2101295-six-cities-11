import { Link } from 'react-router-dom';
import {CITIES} from '../../const/const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSelectedCityAction} from '../../store/action';


export default function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li
            className="locations__item"
            key={city.title}
          >
            <Link
              className={`${city.title === selectedCity.title ? 'tabs__item--active' : ''} locations__item-link tabs__item `}
              to="#"
              onClick={() => {
                dispatch(changeSelectedCityAction(city));
              }}
            >
              <span>{city.title}</span>
            </Link>
          </li>))}
      </ul>
    </section>
  );
}
