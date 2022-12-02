import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offers/offers';
import OffersList from '../../components/offer-list/offer-list';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus, OfferOnPropety } from '../../const/const';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { Review } from '../../types/reviews/reviews';
import { api } from '../../store';


function Property(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const city = useAppSelector((state) => state.city);
  const { id } = useParams();

  const [offer, setOffer] = useState<Offer | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[]>([]);
  const [comments, setComments] = useState<Review[]>([]);

  let offersForMap;
  const getOffer = async () => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id as string}`);
      setOffer(data);
    } catch (error) {
      navigate(AppRoute.NotFound);
    }
  };

  const getNearbyOffers = async () => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id as string}/nearby`);
      setNearbyOffers(data);
    } catch (error) {
      navigate(AppRoute.NotFound);
    }
  };

  const getComments = async () => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id as string}`);
      setComments(data);
    } catch (error) {
      navigate(AppRoute.NotFound);
    }
  };

  useEffect(() => {
    getOffer();
    getNearbyOffers();
    getComments();
  }, [offer]);


  if (offer !== null) {
    offersForMap = [...nearbyOffers.concat(offer)];
  }
  return (
    <main className="page__main page__main--property">
      <Helmet>
        <title>Объявления</title>
      </Helmet>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>Premium</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">{offer?.rating}</span>
              </div>
              <span className="property__rating-value rating__value">{offer?.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Apartment
              </li>
              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{offer?.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
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
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
              <ReviewsList reviews={comments} />
              {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm /> : <Link to={AppRoute.Login}>Форма для отправки комментариев доступна только авторизованным пользователям!</Link> }
            </section>
          </div>
        </div>
        <section className="property__map map" >
          <Map offers={offersForMap} className={'property__map'} city={city} selectedPoint={Number(id)} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList wrapperClassName={'near-places__list places__list'} classList={OfferOnPropety} offers={nearbyOffers} />
        </section>
      </div>
    </main>
  );
}

export default Property;
