import React from "react";
import CommentList from "./components/CommentList";
import CommentInput from "./components/CommentInput";

const App: React.FC = () => {
  return (
    <div
      className="bg-gray-100  sm:py-20 sm:px-10 font-abc
    sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300
    "
    >
      <CommentList />
      <CommentList />
      {/* <CommentInput /> */}
    </div>
  );
};

export default App;
