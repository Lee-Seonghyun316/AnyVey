import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/styles/theme';
import GlobalStyle from './common/styles/global';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root'),
);
