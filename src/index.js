import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import "bootstrap/dist/css/bootstrap.css";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
