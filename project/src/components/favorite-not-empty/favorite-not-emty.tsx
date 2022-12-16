import FavoriteListCity from '../favorite-list-citys/favorite-list-citys';

export default function FavoriteNotEmpty(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteListCity />
        </section>
      </div>
    </main>

  );
}
