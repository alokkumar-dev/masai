import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProdider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProdider store={store} >
      <App />
    </ReduxProdider>
  </React.StrictMode>,
  document.getElementById("root")
);
