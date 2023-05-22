export const mockMoviesDataWithUpdatedTitle = [
  {
    episode_id: 1,
    title: "Episode I - Mock Movie 1",
    director: "some director 1",
    opening_crawl: "Desc one",
    release_date: "1977-05-25",
  },
  {
    episode_id: 2,
    title: "Episode II - Mock Movie 2",
    director: "some director 2",
    opening_crawl: "Desc teo",
    release_date: "1967-05-25",
  },
];

export const mockMoviesData = [
  {
    episode_id: 1,
    title: "Mock Movie 1",
    director: "some director 1",
    opening_crawl: "Desc one",
    release_date: "1977-05-25",
  },
  {
    episode_id: 2,
    title: "Mock Movie 2",
    director: "some director 2",
    opening_crawl: "Desc teo",
    release_date: "1967-05-25",
  },
];

export const APIResponse = {
  count: 2,
  next: null,
  previous: null,
  results: mockMoviesData,
};

export const APIPosterResponse = {
  Poster: "https://somewhere.com/poster.jpg"
};