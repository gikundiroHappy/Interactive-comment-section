import React, { useState } from "react";
import CommentList from "./components/CommentList";
import CommentInput from "./components/CommentInput";

export interface Comment {
  id: number;
  text: string;
  editable: boolean;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (text: string) => {
    const newComment = { id: Date.now(), text, editable: false };
    setComments([...comments, newComment]);
  };
  return (
    <div className=" bg-gray-100 sm:py-20 sm:px-10 md:px-20 lg:px-40 font-abc">
      <CommentList comments={comments} setComments={setComments} />
      <CommentInput onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
