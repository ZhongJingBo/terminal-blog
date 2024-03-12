import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);  