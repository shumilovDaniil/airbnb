import React from "react";
import logo from "./../assets/images/airbnb_logo.svg";
import { FiSearch } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import userImg from "./../assets/images/user.jpg";

const Header = () => {
  return (
    <header className="container flex m-auto px-4 py-4 items-center justify-between border-solid border-b-2 border-gray-200 mb-4">
      <div className="logo">
        <a href="">
          <img className="w-24" src={logo} alt="" />
        </a>
      </div>

      <div className="list text-xs flex items-center shadow-md rounded-full px-3 p-2">
        <button>Anywhere</button>
        <div className="stick w-0.5 mx-1 h-4 bg-gray-400"></div>
        <button>Any week</button>
        <div className="stick w-0.5 mx-1 h-4 bg-gray-400"></div>
        <div className="flex items-center">
          <div>
            <label className="text-gray-500" htmlFor="guest">
              Add guest
            </label>
            <select name="guest" id="guest">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </div>
          <button className="bg-[#ff5a5f] text-white p-1 rounded-full">
            <FiSearch className="text-xs" />
          </button>
        </div>
      </div>

      <div className="right flex items-center gap-4 ">
        <button className="inline-flex text-xs text-gray-600 items-center gap-1 shadow-md p-1 px-2.5 rounded-xl">
          Become a Host <GiEarthAmerica />
        </button>
        <div className="actions flex items-center gap-2 shadow-md p-0.5 rounded-xl px-2">
          <button className="menu ">
            <AiOutlineMenu />
          </button>
          <a className="user" href="">
            <img
              className="rounded-full object-cover"
              width="25px"
              height="25px"
              src={userImg}
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
