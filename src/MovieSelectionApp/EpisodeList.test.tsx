import * as React from "react";
import { shallow, mount } from "enzyme";
import EpisodesList from "./EpisodesList";
import { IEpisodeListProps, IState, IEpisode } from "./interfaces";
test("EpisodesList renders without elements", () => {
  const TestEpisode: IEpisode = {
    airdate: "test",
    airstamp: "test",
    airtime: "test",
    id: 1,
    image: { medium: "test", original: "originalTest" },
    name: "Bob",
    number: 2,
    runtime: 3,
    season: 4,
    summary: "Good Episode",
    url: "GoodUrl"
  };
  const initialState: IState = {
    episodes: [TestEpisode],
    favourites: []
  };

  const store = { state: initialState, dispatch: jest.fn() };
  const props: IEpisodeListProps = {
    ...store.state,
    toggleFavAction: jest.fn(),
    store: store
  };

  const List: any = mount(<EpisodesList {...props} />);

  expect(List).toMatchSnapshot();
});
