import React from "react";
import { IoMdClose } from "react-icons/io";

const ErrorMsg = () => {
  return (
    <div className="error relative px-10 block bg-red-600 text-white p-2 w-full text-center">
      <span>Sorry, We have error when loading homes list... </span>
      <button className="absolute flex right-2 top-1/2 -translate-y-1/2">
        <IoMdClose />
      </button>
    </div>
  );
};

export default ErrorMsg;
