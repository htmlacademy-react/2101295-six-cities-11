import { Offer } from '../../types/offers/offers';
import OneCard from '../one-card/one-card';
import {offerCardConfig} from '../../types/offers/offers';

type OffersListProps = {
  offers: Offer[] | null;
  onOfferMouseEnter?: (offerId: number | null) => void;
  classList: offerCardConfig;
  wrapperClassName: string;
}

export default function OffersList({offers, onOfferMouseEnter, classList, wrapperClassName}: OffersListProps) {
  return(
    <div className={wrapperClassName}>
      {offers?.map((offer) => <OneCard offer={offer} differences={classList} key={offer.id}/>)}
    </div>
  );
}
