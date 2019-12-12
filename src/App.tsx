import React, { Fragment } from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { ThemeProvider } from "emotion-theming";
import preset from './MovieSelectionApp/Theme'
export default function App({
  children
}: {
  children: JSX.Element;
}): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <ThemeProvider theme={preset}>
      <Fragment>
        <>
          <p>Hello from different dimension </p>
          <div>
            <Link to="/"> Home</Link>
            <Link to="/favourites">
              Favourite(s): {state.favourites.length}
            </Link>
          </div>

          {children}
        </>
      </Fragment>
    </ThemeProvider>
  );
}
