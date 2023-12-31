import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/bootstrap.scss";
import Home from "./pages/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
