import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { loadableReady } from "@loadable/component";

import "react-toastify/dist/ReactToastify.css";

import App from "./app";
import configurationStore from "./store";
import reportWebVitals from "./report-web-vitals";
import * as serviceWorker from "./service-worker";

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configurationStore({ initialState });

const render = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById("app"),
  );
};

loadableReady(render);

if (module.hot) {
  module.hot.accept();
}

reportWebVitals();

serviceWorker.register();
