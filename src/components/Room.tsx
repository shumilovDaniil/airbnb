import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

const Room = () => {
  return (
    <div className="flex flex-col relative" style={{ flex: "0 1 22%" }}>
      <button className="absolute right-1 top-1 p-1">
        <MdFavoriteBorder className="text-gray-500" />
      </button>
      <a href="">
        <div>
          <img
            max-width="235px"
            height="223px"
            className="rounded-xl"
            src="https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720"
            alt=""
          />
        </div>
        <div className="content">
          <div className="flex gap-2 justify-between text-xs py-1">
            <h4 className="font-bold ">Nußdorf/Debant, Австрия</h4>
            <span className="flex gap-1 items-center text-gray-600">
              <AiFillStar className="text-[11px]" />
              4.5
            </span>
          </div>
          <div className="info text-xs text-gray-500">
            <span className="block">1 972 километра</span>
            <span>11-17 сент.</span>
          </div>
          <div className="price">
            <span className="text-sm">13 504 ₽ ночь</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Room;
