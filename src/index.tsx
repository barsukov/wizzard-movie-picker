import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./MovieSelectionApp/HomePage";
import FavPage from "./MovieSelectionApp/FavPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <RouterPage pageComponent={<HomePage />} path="/" />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
