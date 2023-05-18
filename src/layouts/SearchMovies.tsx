import React from "react";

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
    <>
      {searchComponent}
      <div className="grid grid-cols-2">
        <div className="bg-gray-300 col-span-2 xs:col-span-1 p-2">
          {listComponent}
        </div>
        <div className="bg-red-500 col-span-2 xs:col-span-1 p-2 border-l border-slate-600">
          {detailViewComponent}
        </div>
      </div>
    </>
  );
};

export default MovieViewLayout;
