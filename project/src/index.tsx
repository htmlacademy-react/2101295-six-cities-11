import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  CardsCount: 400,
} as const;

root.render(
  <React.StrictMode>
    <App
      cardsCount = {Setting.CardsCount}
      offers = {offers}
      offer = {offers[2]}
    />
  </React.StrictMode>,
);
