import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import MovieLayout from "./layouts/SearchMovies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieLayout />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
