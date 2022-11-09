import { useState } from 'react';
import { Offer } from '../../types/offers/offers';
import OneCard from '../one-card/one-card';
import {OfferOnMain} from '../../const/const';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ activeCard, setActiveCard ] = useState(0);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OneCard offer={offer} differences={OfferOnMain} key={offer.id} onMouseEnter={() => setActiveCard(offer.id)} onMouseLeave={() => setActiveCard(0)}/>)}
    </div>
  );
}

export default OffersList;
