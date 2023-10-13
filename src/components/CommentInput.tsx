import React from "react";

export interface CommentInputProps {
  onSubmit: (text: string) => void;
}
const CommentInput: React.FC<CommentInputProps> = () => {
  return (
    <div className="bg-red-200 p-20 my-auto">
      <form action="">
        <textarea></textarea>
        <br />
        <button className="text-white font-semibold bg-purple-700 px-6 py-2 rounded-md">
          SEND
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
