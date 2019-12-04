import * as React from "react";
import { Component } from "react";
import { Store } from "../Store";
import { IAction, IEpisode } from "./interfaces";
export interface EpisodeListsProps {}
const EpisodeLists: React.SFC<EpisodeListsProps> = (props: any) => {
  const { episodes, toogleFav, favorites } = props;
  return (
    <div>
      {episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.show.id}>
            <img src={episode.show.image.medium}></img>
            <div>{episode.show.name}</div>
            <button type="button" onClick={() => toogleFav(episode)}>
              {favorites.find((fav: IEpisode) => fav.show.id == episode.show.id)
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
