import React from "react";
import { IEpisode, Dispatch, IState, FavAction } from "./interfaces";
import { Button, Image, Heading, Card, Text } from "rebass";
interface IProps {
  episodes: Array<IEpisode>;
  toggleFavAction: FavAction;
  favourites: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
}

export default function EpisodesList(props: IProps): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <Card>
        <Image
          sx={{
            width: ["100%", "100%"],
            borderRadius: 8
          }}
          src={!!episode.image ? episode.image.medium : ""}
          alt={`Rick and Mort ${episode.name}`}
        />
        <Heading>
          {" "}
          Seasion: {episode.season} Number: {episode.number}
        </Heading>
        <Text>{episode.name}</Text>
        <Button
          variant="primary"
          onClick={() => toggleFavAction(state, dispatch, episode)}
        >
          {favourites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfav"
            : "Fav"}
        </Button>
      </Card>
    );
  });
}
