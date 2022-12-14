import { useState } from 'react';
import { SORT_TYPES } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeSortType } from '../../store/action-process/action-process';
import { getSortType } from '../../store/action-process/selector';

export default function SortForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSortListOpen, setSortListStatus] = useState(false);
  const typeSort = useAppSelector(getSortType);
  const handleToggleMouseEnter = () => setSortListStatus(!isSortListOpen);


  return (
    <form className="places__sorting" action="#" method="get" onMouseEnter={handleToggleMouseEnter} onMouseLeave={handleToggleMouseEnter}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
      &nbsp;{typeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`${isSortListOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {SORT_TYPES.map((el) => (
          <li
            key={el.type}
            className={`places__option  ${el.type === typeSort ? 'places__option--active' : ''} `}
            tabIndex={0}
            onClick={() => dispatch(changeSortType(el.type))}
          >
            {el.type}
          </li>))}
      </ul>
    </form >
  );
}
