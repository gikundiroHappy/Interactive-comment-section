import React from "react";
import Image from "./image/profile.webp";
import { GrAdd, GrFormEdit } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const CommentInput = () => {
  return (
    <div className="grid sm:grid-cols-5 bg-white rounded-md p-4 sm:p-5 sm:text-sm m-2 mt-8">
      <div className="p-10 hidden sm:block bg-gray-100 col-span-1 w-10 py-10 px-8 text-center space-y-10 rounded-md">
        <div className="cursor-pointer">
          <GrAdd />
        </div>
        <p>6</p>
        <div className="cursor-pointer">
          <BiMinus />
        </div>
      </div>

      <div className="col-span-4 space-y-5 x">
        <div className="grid sm:grid-cols-3 ">
          <div className="grid bg-indigo-200 sm:grid-cols-3 col-span-2">
            <div className=" col-span-1">
              <img
                src={Image}
                alt="profile picture"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="items-center text-xs flex gap-2 col-span-2">
              <h2 className="font-bold">Gikundiro happy</h2>
              <p className="">1 week ago</p>
            </div>
          </div>

          <div className=" bg-red-100 hidden sm:block sm:flex justify-end items-center gap-4 col-span-1 ">
            <div className="flex text-red-500 font-bold cursor-pointer">
              <MdDelete className=" text-2xl" />
              <p className="">Delete</p>
            </div>

            <div className="flex text-purple-500 font-bold cursor-pointer">
              <GrFormEdit className="text-2xl" />
              <p className="">Edit</p>
            </div>
          </div>
        </div>

        <div className="text-sm leading-6">
          <p>
            <span className="text-purple-700 font-bold ">@name lee </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            natus error nihil rerum nesciunt, odio non ex ducimus accusantium
            perspiciatis officia necessitatibus perferendis nobis dicta omnis
            quod quia, aperiam doloremque?
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="mt-5 block sm:hidden flex bg-gray-100 space-x-5 p-2 items-center rounded-md">
          <div className="cursor-pointer">
            <GrAdd />
          </div>
          <p className="font-bold">6</p>
          <div className="cursor-pointer">
            <BiMinus />
          </div>
        </div>
        <div className="mt-4 sm:hidden flex justify-end items-center gap-2 ">
          <div className="flex text-red-500 font-bold cursor-pointer">
            <MdDelete className=" text-2xl" />
            <p className="">Delete</p>
          </div>

          <div className="flex text-purple-500 font-bold cursor-pointer">
            <GrFormEdit className="text-2xl" />
            <p className="">Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
