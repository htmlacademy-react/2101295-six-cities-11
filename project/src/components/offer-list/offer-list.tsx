import { useState } from 'react';
import { Offer } from '../../types/offers/offers';
import OneCard from '../one-card/one-card';
import {OfferOnMain} from '../../const/const';

type OffersListProps = {
  offers: Offer[];
  onOfferMouseEnter?: (offerId: number | null) => void;
}

function OffersList({offers, onOfferMouseEnter}: OffersListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ activeCard, setActiveCard ] = useState(0);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OneCard offer={offer} differences={OfferOnMain} onOfferMouseEnter={onOfferMouseEnter} key={offer.id}/>)}
    </div>
  );
}

export default OffersList;
