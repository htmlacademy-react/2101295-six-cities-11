import React, { FormEvent, useState } from 'react';
import { LengthComment, starsData } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendNewReviewAction } from '../../store/api-action';
import { getCurrentOffer } from '../../store/data-process/selector';
import { ReviewData } from '../../types/reviews/reviews';
import Stars from './stars';


export default function CommentForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [commentLoad, setCommentLoad] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    comment: string;
    rating: string;
  }>({
    comment: '',
    rating: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendNewReviewAction(reviewData));
  };

  const currentOffer = useAppSelector(getCurrentOffer);

  const isValidForm = (LengthComment.Min < formData.comment.length && formData.comment.length < LengthComment.Max && formData.rating !== '');
  const unBlockCommentForm = !isValidForm && !commentLoad;

  const handleFormSubmmit = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setCommentLoad(true);
    if(currentOffer) {
      onSubmit({
        id: currentOffer.id,
        comment: formData.comment,
        rating: formData.rating,
      });
    }
    setFormData({...formData, comment: '', rating: ''});
    setCommentLoad(false);
  };


  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsData.map((star) => <Stars value={star.value} id={star.id} title={star.title} rating={formData.rating} handleFormSubmmit={fieldChangeHandle} commentLoad={commentLoad} key={star.id}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={fieldChangeHandle} disabled={commentLoad} id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.comment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" onClick={handleFormSubmmit} disabled={unBlockCommentForm}>Submit</button>
      </div>
    </form>
  );
}
