import React from "react";
import Image from "./image/profile.webp";
import { GrAdd, GrFormEdit } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const CommentInput = () => {
  return (
    <div className="grid sm:grid-cols-5 bg-white rounded-md p-5 sm:p-10 w-screen">
      <div className="hidden sm:block bg-gray-100 col-span-1 w-10 py-10 px-8 text-center space-y-10 rounded-md">
        <div>
          <GrAdd />
        </div>
        <p>6</p>
        <div>
          <BiMinus />
        </div>
      </div>

      <div className="col-span-4 space-y-5">
        <div className="grid grid-cols-4 bg-red-100">
          <div className="grid grid-cols-2 gap-1 col-span-3 bg-purple-400">
            <div className=" ">
              <img
                src={Image}
                alt="profile picture"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="w-full">
              <h2 className="w-50">namennnnnnnnnnniiiiiiinnnnn</h2>
              <p>date</p>
            </div>
          </div>

          <div className="flex justify-end  gap-2 colspan:1">
            <div className="flex text-red-500 font-bold">
              <MdDelete className=" text-2xl" />
              <p className="hidden sm:block">Delete</p>
            </div>

            <div className="flex text-purple-500 font-bold">
              <GrFormEdit className="text-2xl" />
              <p className="hidden sm:block">Edit</p>
            </div>
          </div>
        </div>

        <div>
          <p>
            <span className="text-purple-700 font-bold">@name lee </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            natus error nihil rerum nesciunt, odio non ex ducimus accusantium
            perspiciatis officia necessitatibus perferendis nobis dicta omnis
            quod quia, aperiam doloremque?
          </p>
        </div>
      </div>

      <div className="mt-5 block sm:hidden flex bg-gray-100 space-x-20  px-5 py-2 text-center rounded-md">
        <div>
          <GrAdd />
        </div>
        <p>6</p>
        <div>
          <BiMinus />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
