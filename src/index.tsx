import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Could not find root element');
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
