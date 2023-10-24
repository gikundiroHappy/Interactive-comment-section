import React from "react";

export interface CommentInputProps {
  // onSubmit: (text: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = () => {
  return (
    <div className="py-20 px-10 sm:px-20 xl:px-40">
      <form className="space-y-5">
        <textarea className="w-full h-40 p-5"></textarea>
        <br />
        <button className="text-white font-semibold bg-purple-700 px-6 py-2 rounded-md ">
          SEND
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
