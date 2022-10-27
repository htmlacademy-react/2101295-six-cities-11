import MainPages from '../../pages/main-pages/main-pages';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps
): JSX.Element {
  return (
    <MainPages cardsCount={cardsCount}/>
  );
}

export default App;
