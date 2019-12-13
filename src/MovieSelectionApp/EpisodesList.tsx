import React from "react";
import { IEpisode, Dispatch, IState, FavAction } from "./interfaces";
import { Button, Box, Heading, Card, Text } from "rebass";
interface IProps {
  episodes: Array<IEpisode>;
  toggleFavAction: FavAction;
  favourites: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
}

const isFavorite = (favourites: Array<IEpisode>, episode: IEpisode) => {
  return favourites.find((fav: IEpisode) => fav.id === episode.id);
};
export default function EpisodesList(props: IProps): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <Card key={episode.id}>
        <Box
          sx={{
            px: 4,
            py: 6,
            backgroundImage: `url(${
              !!episode.image ? episode.image.original : ""
            })`,
            backgroundSize: "cover",
            borderRadius: 8,
            color: "white",
            bg: "gray"
          }}
        >
          <Box
            sx={{
              px: 1,
              py: 3,
              backgroundSize: "cover",
              borderRadius: 8,
              color: "white",
              bg: "white",
              opacity: "60%"
            }}
          >
            <Heading textAlign="center" color="black" fontSize={[3, 5]}>
              Seasion: {episode.season} Number: {episode.number}
            </Heading>
          </Box>
        </Box>
        <Box
          {...props}
          sx={{
            display: "grid",
            gridGap: 2 // theme.space[3]
          }}
        >
          <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
            {episode.name}
          </Text>
          <Button
            variant={isFavorite(favourites, episode) ? "outline" : "secondary"}
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {isFavorite(favourites, episode) ? "Unfav" : "Fav"}
          </Button>
        </Box>
      </Card>
    );
  });
}
