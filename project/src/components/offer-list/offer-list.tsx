import OneCard from '../one-card/one-card';
import {Offer, offerCardConfig} from '../../types/offers/offers';
import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/action-process/selector';

type OffersListProps = {
  offers: Offer[];
  classList: offerCardConfig;
  wrapperClassName: string;
}
const getSortedOffers = function (offers: Offer[], type: string) {
  const offerss = offers.slice();
  switch (type) {
    case 'Price: low to high': return offerss.sort((a, b) => a.price - b.price);
    case 'Price: high to low': return offerss.sort((a, b) => b.price - a.price);
    case 'Top rated first': return offerss.sort((a, b) => a.rating - b.rating);
    default: return offers;
  }
};

export default function OffersList({offers, classList, wrapperClassName}: OffersListProps) {
  const sortType = useAppSelector(getSortType);
  const sortOffers = getSortedOffers(offers, sortType);
  return(
    <div className={wrapperClassName}>
      {sortOffers.map((offer) => <OneCard offer={offer} differences={classList} key={offer.id}/>)}
    </div>
  );
}
