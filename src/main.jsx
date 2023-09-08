import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./store/apiSlice.js";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
