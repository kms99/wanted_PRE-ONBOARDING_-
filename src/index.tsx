import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import StateThemeProvider from './provider/StateThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <StateThemeProvider>
      <GlobalStyle />
      <App />
    </StateThemeProvider>
  </Provider>,
);
