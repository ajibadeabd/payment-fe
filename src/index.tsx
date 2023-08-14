import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import store from "store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById("root"),
);
