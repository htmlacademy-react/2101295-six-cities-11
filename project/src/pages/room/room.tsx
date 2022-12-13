import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offer-list';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthorizationStatus, OfferOnPropety } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import Gallery from '../../components/property-details/property-gallery';
import ListPropertys from '../../components/property-details/room-property';
import { fetchCurrentOfferAction, fetchFavoritesOffersAction, fetchNearbyOffersAction, fetchReviewListAction } from '../../store/api-action';
import NotFoundScreen from '../not-found/not-found';
import LoadingScreen from '../../components/loader/loader';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCurrentOffer, getNearbyOffers, getStatusLoadedData, getReviews } from '../../store/data-process/selector';
import { poinOutOffer } from '../../store/action-process/action-process';
import Header from '../../components/header/header';
import { handleButtonFavoriteClick } from '../../utils/utils';


export default function Property(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { id } = useParams();
  const offer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);
  const isOffersDataLoading = useAppSelector(getStatusLoadedData);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchFavoritesOffersAction());
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewListAction(id));
      dispatch(poinOutOffer(Number(id)));
    }
  }, [id, dispatch]);

  if (isOffersDataLoading || offer?.id !== Number(id)) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <NotFoundScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Helmet>
          <title>Объявления</title>
        </Helmet>
        <section className="property">
          <Gallery key={offer?.id} photos={offer?.images} alt={offer?.type} />
          <div className="property__container container">
            <div className="property__wrapper">
              {offer?.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className='property__bookmark-button button property__bookmark-button--active'
                  type="button"
                  onClick={() => handleButtonFavoriteClick(offer, authorizationStatus, dispatch, navigate)}
                >
                  <svg className={offer.isFavorite ? 'place-card__bookmark-icon' : 'property__bookmark-icon'} width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">{offer.rating}</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ListPropertys propertys={offer?.goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer?.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews {reviews.length} <span className="reviews__amount"></span></h2>
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm /> : ''}
              </section>
            </div>
          </div>
          <section className="property__map map" >
            <Map offers={nearbyOffers.concat(offer)} className={'property__map'} city={offer.city} unchangeableOfferId={Number(id)} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList wrapperClassName={'near-places__list places__list'} classList={OfferOnPropety} offers={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}
