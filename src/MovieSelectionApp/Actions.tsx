import { IAction, IEpisode, IShow, Dispatch } from "./interfaces";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL = "http://api.tvmaze.com/search/shows?q=girls&embeded=episodes";
  const data = await fetch(URL);
  const dataJson = await data.json();
  console.log(dataJson);

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJson
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
      (fav: IEpisode) => fav.show.id != episode.show.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode
    };
  }
  return dispatch(dispatchObj);
};
