import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus, CITIES } from '../../const/const';
import { AppRoute } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action-process/action-process';
import { loginAction } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthData } from '../../types/auth-data';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && passwordRef.current.value.length > 1) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  function getRandomCity(min: number, max: number) {
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    const randomCity = CITIES[randomIndex];
    return randomCity;
  }

  const cityOnWrap = getRandomCity(0, 5);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern={'^(?=.*[0-9])(?=.*[A-Za-z])([A-Za-z0-9]+)$'} title="Пароль должен состоять минимум из одной латинской буквы и цифры без пробелов"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={() => {
                dispatch(changeCity(cityOnWrap));
              }}
              >
                <span>{cityOnWrap.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
