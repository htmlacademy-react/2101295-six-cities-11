type StarsProps = {
    value: string;
    id: string;
    title: string;
    rating: string;
    handleFormSubmmit: ({target}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    commentLoad: boolean;
}

export default function Stars({value, id, title, rating, handleFormSubmmit, commentLoad} : StarsProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" disabled={commentLoad} onChange={handleFormSubmmit} name="rating" value={value} id={id} type="radio" checked={rating === value} />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
