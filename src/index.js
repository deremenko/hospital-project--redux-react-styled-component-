import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import HeaderProvider from './providers/HeaderProvider';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <HeaderProvider>
            <App />
          </HeaderProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

