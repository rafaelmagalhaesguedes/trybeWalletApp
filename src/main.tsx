import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';
import { GlobalStyle } from './GlobalStyle';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <Provider store={ store }>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>,
  );
