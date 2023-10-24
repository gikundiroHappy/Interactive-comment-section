import React from "react";
import CommentList from "./components/CommentList";
import CommentInput from "./components/CommentInput";

const App: React.FC = () => {
  return (
    <div className=" bg-gray-100 sm:py-20 sm:px-10 md:px-20 lg:px-40 font-abc">
      <CommentList />
      <CommentInput />
    </div>
  );
};

export default App;
