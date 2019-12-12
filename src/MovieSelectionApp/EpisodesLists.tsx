import * as React from "react";
import { IEpisode } from "./interfaces";
export interface EpisodeListsProps {}
const EpisodeLists: React.SFC<EpisodeListsProps> = (props: any) => {
  const { episodes, toogleFav, favorites } = props;

  return (
    <div>
      {episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id}>
            <img src={episode.image ? episode.image.medium : null}></img>
            <div>{episode.name}</div>
            <button type="button" onClick={() => toogleFav(episode)}>
              {favorites.find((fav: IEpisode) => fav.id == episode.id)
                ? "Unfav"
                : "Fav"}
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default EpisodeLists;
