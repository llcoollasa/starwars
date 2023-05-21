import { getMovieTitle } from "./helper";

describe("getMovieTitle", () => {
  test("returns the correct movie title", () => {
    const id = 3;
    const title = "The Return of the Jedi";
    const expected = "Episode III - The Return of the Jedi";

    const result = getMovieTitle(id, title);

    expect(result).toEqual(expected);
  });
});
