import { IAction, IEpisode, Dispatch } from "./interfaces";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJson = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJson._embedded.episodes
  });
};

export const toogleFav = (dispatch: any, episode: IEpisode, favorites: Array<IEpisode>): IAction => {
  const episodeInFav = favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: [episode]
  };

  if (episodeInFav) {
    const favWithoutEpisode = favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode
    };
  }
  return dispatch(dispatchObj);
};
