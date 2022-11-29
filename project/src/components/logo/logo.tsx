import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

type LogoProps = {
  classAction?: string;
}

function Logo({classAction}: LogoProps): JSX.Element {
  return (
    <div className="header__left">
      <Link className={classAction ? `header__logo-link ${classAction}` : 'header__logo-link'} to={AppRoute.Main}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}
export default Logo;

