import { Helmet } from 'react-helmet-async';
function NotFound () : JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>Ошибка 404</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            </div>
            <nav className="header__nav">
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
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="page--not_found" style={{textAlign: 'center', paddingTop: 50}}>
        <h1>404. Page not found</h1>
      </div>
    </div>
  );
}

export default NotFound;
