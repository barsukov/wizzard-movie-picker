import React, { Fragment, useState } from "react";
import "./App.css";
import { Store } from "./Store";
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
        <p>Hello from different dimension </p>
        <div>
          <Link to="/"> Home</Link>
          <Link to='/favourites'>Favourite(s): {state.favourites.length}</Link>
        </div>

       {children}
      </>
    </Fragment>
  );
}
