import React, { Fragment } from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { ThemeProvider } from "emotion-theming";
import { Box, Heading } from "rebass";
import preset from "./MovieSelectionApp/Theme";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const dynamicStyle = (props: any) =>
  css`
    color: ${props.color};
  `;

const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;
export default function App({
  children
}: {
  children: JSX.Element;
}): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <ThemeProvider theme={preset}>
      <Box
        sx={{
          display: "grid",
          color: "white",
          bg: "black",
          alignItems: "center",
          gridTemplateColumns: "repeat(3, 1fr);",
          gridAutoRows: "minmax(100px, auto);",
          gridGap: 3 // theme.space[3]
        }}
      >
        <Heading p={2} sx={{ gridColumn: " 2 / 3",}} fontWeight="bold">
          Hello from different dimension ;)
        </Heading>
        <Box
          sx={{
            display: "grid",
            alignItems: "stretch;",
            gridColumn: " 3 / 3",
            gridTemplateColumns: "repeat(3, 1fr);",
            gridGap: 10,
            gridAutoRows: "minmax(10px, auto)"
          }}
        >
          <StyledLink
            to="/"
            style={{
              gridColumn: " 2 / 3",
              gridRow: " 1"
            }}
          >
            {" "}
            Home
          </StyledLink>
          <StyledLink
            to="/favourites"
            style={{
              gridColumn: " 3 / 3",
              gridRow: " 1"
            }}
          >
            Favourite(s): {state.favourites.length}
          </StyledLink>
        </Box>
      </Box>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
}
