import React from "react";
import CommentList from "./components/CommentList";
import CommentInput from "./components/CommentInput";

const App: React.FC = () => {
  return (
    <div
      className="bg-gray-100 h-screen sm:py-20 sm:px-60 
    sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300
    "
    >
      <CommentList />
      {/* <CommentInput /> */}
    </div>
  );
};

export default App;
