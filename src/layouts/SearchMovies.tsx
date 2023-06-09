import React from "react";
import Sorting from "../components/movie/Sorting";

interface MovieViewLayoutProps {
  searchComponent: React.ReactNode;
  listComponent: React.ReactNode;
  detailViewComponent: React.ReactNode;
}

const MovieViewLayout: React.FC<MovieViewLayoutProps> = ({
  searchComponent,
  listComponent,
  detailViewComponent,
}) => {
  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen">
      <div>{searchComponent} <Sorting/></div>
      <div className="grid grid-cols-2">
        <div className="col-span-2 xs:col-span-1">{listComponent}</div>
        <div className="col-span-2 xs:col-span-1 p-4 border-l border-slate-200">
          {detailViewComponent}
        </div>
      </div>
    </div>
  );
};

export default MovieViewLayout;
