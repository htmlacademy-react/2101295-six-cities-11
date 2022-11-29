import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {AppRoute} from '../../const/const';
import { logoutAction } from '../../store/api-action';
import Logo from '../logo/logo';

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo classAction={'header__logo-link--active'}/>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth ?
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
                  <Link className="header__nav-link" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  to={AppRoute.Main}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul> :
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}
