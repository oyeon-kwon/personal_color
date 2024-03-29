import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
