import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; 
import store from "../src/store/index.js";
import App from "./App";
import { ContextProvider } from "./contexts/context.js"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
