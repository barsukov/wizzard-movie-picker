import React, { Fragment } from "react";
import { IHomePageProps } from "./interfaces";
import App from "../App";
import { Store } from '../Store'
import { fetchDataAction, toogleFav } from './Actions'

const EpisodeLists = React.lazy(() => import("./EpisodesLists"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IHomePageProps = {
    episodes: state.episodes,
    toogleFav,
    favorites: state.favorites
  };

  return (
    <App>
      <Fragment>
        <>
          <section>
            <React.Suspense fallback={<div>loading...</div>}>
              <EpisodeLists {...props} />
            </React.Suspense>
          </section>
        </>
      </Fragment>
    </App>
  );
};
