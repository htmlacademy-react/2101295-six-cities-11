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
  switch (type) {
    case 'Price: low to high': return offers.sort((a, b) => a.price - b.price);
    case 'Price: high to low': return offers.sort((a, b) => b.price - a.price);
    case 'Top rated first': return offers.sort((a, b) => a.rating - b.rating);
    default: return offers;
  }
};


export default function OffersList({offers, classList, wrapperClassName}: OffersListProps) {
  const sortType = useAppSelector(getSortType);
  const sortOffers = (sortType === 'Popular') ? offers : getSortedOffers(offers, sortType);
  return(
    <div className={wrapperClassName}>
      {sortOffers.map((offer) => <OneCard offer={offer} differences={classList} key={offer.id}/>)}
    </div>
  );
}
