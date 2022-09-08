import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { HomeService } from "../services/home.service";
import Home from "./Home";
import { IoMdClose } from "react-icons/io";
import IHome from "../types";

const HomesList = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(["homes"], () => HomeService.getAll());

  return (
    <div className="flex gap-3 gap-y-10 flex-wrap justify-between">
      {isLoading ? (
        <div>Loading..</div>
      ) : response?.data.length ? (
        response?.data.map((home: IHome) => (
          <Home key={home.id} {...home}></Home>
        ))
      ) : (
        <div className="error relative px-10 block bg-red-600 text-white p-2 w-full text-center">
          <span>Sorry, We have error when loading homes list... </span>
          <button className="absolute flex right-2 top-1/2 -translate-y-1/2">
            <IoMdClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default HomesList;
