import FavoriteListCities from '../favorite-list-cities/favorite-list-cities';

export default function FavoriteNotEmpty(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteListCities />
        </section>
      </div>
    </main>

  );
}
