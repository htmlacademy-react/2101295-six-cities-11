import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {store} from './store/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  CardsCount: 400,
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardsCount = {Setting.CardsCount}
      />
    </Provider>
  </React.StrictMode>,
);
