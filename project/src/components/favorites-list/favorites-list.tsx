import { Offer } from '../../types/offers/offers';
import OneCard from '../one-card/one-card';
import {OfferOnFavorites} from '../../const/const';

type OffersFavoritesListProps = {
  offers: Offer[];
}

export default function FavoritesList({offers}: OffersFavoritesListProps) {
  return(
    <div className="favorites__places">
      {offers.filter((offer) => offer.isFavorite === true).map((offer) => <OneCard offer={offer} differences={OfferOnFavorites} key={offer.id} />)}
    </div>
  );
}
