import { useState } from 'react';
import { arrayFromVar } from '../../const/const';
import { useAppDispatch, useAppSelector} from '../../hooks/index';
import { changeTypeSort } from '../../store/action';

export default function SortForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSortListOpen, setSortListStatus] = useState(false);
  const typeSort = useAppSelector((state) => state.typeSort);

  const toogleListHandler = () => setSortListStatus(!isSortListOpen);


  return (
    <form className="places__sorting" action="#" method="get" onMouseEnter={toogleListHandler} onMouseLeave={toogleListHandler}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className= {`${isSortListOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {arrayFromVar.map((el) => (
          <li
            key={el.type}
            className={`places__option  ${el.type === typeSort ? 'places__option--active' : ''} `}
            tabIndex={0}
            onClick={() => dispatch(changeTypeSort(el.type))}
          >
            {el.title}
          </li>))};
      </ul>
    </form >
  );
}
