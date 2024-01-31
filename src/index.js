import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
