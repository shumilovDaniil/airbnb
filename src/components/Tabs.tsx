import React, { useState } from "react";
import { GiIsland } from "react-icons/gi";
import { BsFillUmbrellaFill } from "react-icons/bs";
import { MdPool } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdPark } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
const Tabs = () => {
  const [isActive, setIsActive] = useState(true);

  const {} = useQuery(["categories"], () => {});

  return (
    <div className="list mb-6 text-[#848484] font-medium flex items-start gap-6 justify-between text-xs">
      <div className="flex justify-between flex-1 gap-7">
        {isActive ? (
          <a className="item border-solid border-b-2 pb-3 border-black" href="">
            <div className="text-center text-[#2e2e2e]">
              <GiIsland className="text-xl m-auto mb-1" />
              <h4>Islands</h4>
            </div>
          </a>
        ) : (
          <a className="item " href="">
            <div className="text-center">
              <GiIsland className="text-xl m-auto mb-1" />
              <h4>Islands</h4>
            </div>
          </a>
        )}
        <a className="item" href="">
          <div className="text-center">
            <BsFillUmbrellaFill className="text-xl m-auto mb-1" />
            <h4>Beach</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <MdPool className="text-xl m-auto mb-1" />
            <h4>Amazing pools</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <RiArticleLine className="text-xl m-auto mb-1" />
            <h4>OMG!</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <MdOutlineFreeBreakfast className="text-xl m-auto mb-1" />
            <h4>Arctic</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <GiIsland className="text-xl m-auto mb-1" />
            <h4>Bed & breakfasts</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <AiOutlineAntDesign className="text-xl m-auto mb-1" />
            <h4>Design</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <MdPark className="text-xl m-auto mb-1" />
            <h4>National parks</h4>
          </div>
        </a>
        <a className="item" href="">
          <div className="text-center">
            <BiHomeSmile className="text-xl m-auto mb-1" />
            <h4>Shared homes</h4>
          </div>
        </a>
      </div>
      <button className="p-2 rounded-xl flex items-center gap-2 border-solid border-2 border-gray-500">
        <GoSettings /> Filters
      </button>
    </div>
  );
};

export default Tabs;
