import { Offer, offerCardConfig } from '../../types/offers/offers';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { poinOutOffer } from '../../store/action-process/action-process';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { addFavoriteOfferAction, removeFavoriteOfferAction } from '../../store/api-action';


type CardProps = {
  offer: Offer;
  differences: offerCardConfig;
}


export default function OneCard({ offer, differences }: CardProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      if (offer.isFavorite) {
        dispatch(removeFavoriteOfferAction(offer.id));
      } else {
        dispatch(addFavoriteOfferAction((offer.id)));
      }

    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <article className={`place-card ${differences.class.forArticle}`} id={offer.id.toString()} onMouseEnter={() => dispatch(poinOutOffer(offer.id))} onMouseLeave={() => dispatch(poinOutOffer(undefined))}>
      {offer.isPremium ? <div className="place-card__mark"> <span>Premium</span></div> : ''}
      <div className={`place-card__image-wrapper ${differences.class.forWrap}`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image"
            src={offer.previewImage}
            width={differences.size.width}
            height={differences.size.hight}
            alt="img"
          />
        </Link>
      </div>
      <div className={`${differences.class.forInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night         </span>
          </div>
          <button className={offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
            onClick={handleButtonClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              In bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(Math.round(offer.rating)) * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
