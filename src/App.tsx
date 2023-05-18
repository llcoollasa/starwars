import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MovieView from "./views/MovieView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieView />
    </QueryClientProvider>
  );
}

export default App;
