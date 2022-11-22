//import { arrayFromVar } from ''
// import { offers } from '../../mocks/offers/offers';
import {useAppDispatch} from '../../hooks/index';
import {sortOffersPriceLow} from '../../store/action';

export default function SortForm(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {/* {arrayFromVar.map((el) => (
          <li
            key={el.price}
            className={`places__option  ${sortType === CurrentSortType ? 'places__option--active' : ''} `}
            tabIndex={0}
            onClick={handleChange}
          >
            {el}
          </li>))}; */}
        <li
          className="places__option places__options--custom places__options--opened"
          tabIndex={0}
          onClick={() => dispatch(sortOffersPriceLow())}
        >
          Price: low to high
        </li>


      </ul>
    </form>
  );
}
