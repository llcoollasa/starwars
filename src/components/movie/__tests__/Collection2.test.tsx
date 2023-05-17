import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import Collection, { Movie } from "../Collection";
import { getMovies } from "../Services";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import axios from "axios";
jest.mock("axios");

const queryClient = new QueryClient();
const wrapper = (children: React.ReactElement) => {
  const { rerender, ...result } = render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { ...result };
};

describe("Collection", () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("foo", async () => {
    const mockResponse = {
      data: [
        { id: 1, title: "Mock Title 1", release_date: "2023-03-03" },
        { id: 2, title: "Mock Title 2", release_date: "2023-03-04" },
      ],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      mockResponse
    );
    const { getByText } = wrapper(<Collection />);
    expect(getByText("Mock Title 1")).toBeInTheDocument();
  });
});
