import { Offer } from '../../types/offers/offers';
import OneCard from '../one-card/one-card';
//import {OfferOnMain} from '../../const/const';
import {offerCardConfig} from '../../types/offers/offers';

type OffersListProps = {
  offers: Offer[];
  onOfferMouseEnter?: (offerId: number | null) => void;
  differences: offerCardConfig;
  forOut: string;
}

export default function OffersList({offers, onOfferMouseEnter, differences, forOut}: OffersListProps) {
  return(
    <div className={forOut}>
      {offers.map((offer) => <OneCard offer={offer} differences={differences} onOfferMouseEnter={onOfferMouseEnter} key={offer.id}/>)}
    </div>
  );
}
