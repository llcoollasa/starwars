import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MovieView from "./views/MovieView";
import MovieViewContextProvider from "./context/MovieViewContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieViewContextProvider>
        <MovieView />
      </MovieViewContextProvider>
    </QueryClientProvider>
  );
}

export default App;
