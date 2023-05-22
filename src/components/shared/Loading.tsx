import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-1/5" data-testid="loading-screen">
      <div className="inline-flex animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loading;
