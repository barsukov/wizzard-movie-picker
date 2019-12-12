import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Store } from "./Store";
import { IAction, IHomePageProps, IEpisode } from "./MovieSelectionApp/interfaces";
import { statements } from "@babel/template";
import HomePage from "./MovieSelectionApp/HomePage";
import { Link } from "@reach/router";

export default function App({
  children
}: {
  children: JSX.Element;
}): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <Fragment>
      <>
        <p>Hello girls</p>
        <div>
          <Link to="/"> Home</Link>
          <Link to="/favs">Favorites : {state.favorites}</Link>
        </div>

       {children}
      </>
    </Fragment>
  );
}
