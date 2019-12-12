export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}
export interface IHomePageProps{
  episodes: Array<IEpisode>,
  toogleFav: (dispatch: any, episode: IEpisode, favorites: IEpisode[]) => IAction,
  favorites: Array<IEpisode>
}
export type Dispatch = React.Dispatch<IAction>;

export interface IEpisode {
  id: string;
  name: string;
  image: any;
}

export interface IAction {
  type: string;
  payload: any;
}
