import CityFavoritesList from './list-citys';

export default function FavoriteNotEmptyPage(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <CityFavoritesList />
        </section>
      </div>
    </main>

  );
}
