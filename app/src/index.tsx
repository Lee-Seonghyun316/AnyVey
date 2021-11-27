import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/styles/theme';
import GlobalStyle from './common/styles/global';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.render(
  <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Fragment>,
  document.getElementById('root'),
);
