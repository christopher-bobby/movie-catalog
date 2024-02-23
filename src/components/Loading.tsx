import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black rounded-full animate-bounc bg-customYellow [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce bg-customYellow [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce bg-customYellow" />
    </div>
  );
};

export default Loading;
