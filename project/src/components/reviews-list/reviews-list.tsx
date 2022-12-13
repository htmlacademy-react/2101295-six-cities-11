import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/reviews/reviews';

type ReviewsListProps = {
  reviews?: Review[];
}

export default function ReviewsList ({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews?.slice().reverse().slice(0, 10).map((review) => <ReviewsItem review={review} key={review.id} />)}
    </ul>
  );
}
