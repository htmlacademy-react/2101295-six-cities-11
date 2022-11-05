import { useState } from 'react';
import { Offer } from '../../types/offers/offers';
import CardComponent from '../card-component/card-component';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ activeCard, setActiveCard ] = useState(0);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent offer={offer} key={offer.id} onMouseEnter={() => setActiveCard(offer.id)} onMouseLeave={() => setActiveCard(0)}/>)}
    </div>
  );
}

export default OffersList;
