import { Offer } from '../../types/offers/offers';
import FavoritesCard from '../favorites-card/favorites-card';

type OffersFavoritesListProps = {
  offers: Offer[];
}

export default function FavoritesList({offers}: OffersFavoritesListProps) {
  return(
    <div className="favorites__places">
      {offers.filter((offer) => offer.isFavorite === true).map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
    </div>
  );
}
