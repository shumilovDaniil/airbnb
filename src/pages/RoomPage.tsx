import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Header from "../components/Header";
import { RoomService } from "../services/room.service";
import IRoomPage from "../types";
import { RiMedal2Fill } from "react-icons/ri";
import { MdFavoriteBorder, MdIosShare } from "react-icons/md";

const RoomPage = () => {
  const { roomId } = useParams();

  const { data: response, isLoading } = useQuery(["room"], () =>
    RoomService.getSingle(Number(roomId))
  );

  return (
    <>
      <Header />
      <div className="container m-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : response?.data.length ? (
          response?.data.map((room: IRoomPage) => {
            return (
              <div key={room.id}>
                <h2 className="name text-2xl tracking-wide">{room.name}</h2>
                <nav className="flex justify-between mb-4">
                  <ul className="flex gap-4">
                    <li className="rating flex items-center gap-1">
                      <AiFillStar />
                      {room.rating}
                    </li>
                    <li>{room.reviewsCount} reviews</li>
                    {room.isSuperhost ? (
                      <div className="flex items-center gap-1">
                        <RiMedal2Fill />
                        Superhost
                      </div>
                    ) : (
                      ""
                    )}
                    <li>{room.address}</li>
                  </ul>
                  <ul className="flex items-center gap-4">
                    <li>
                      <button className="flex items-center gap-1">
                        <MdIosShare /> Share
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center gap-1">
                        <MdFavoriteBorder /> Save
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="gallery flex flex-col">
                  <img
                    className="rounded-2xl w-full max-h-[500px] object-cover mb-8"
                    src={room.images[0]}
                    alt=""
                  />
                  <div className="flex gap-x-10">
                    <div>
                      <h2 className="text-3xl mb-6">
                        {room.name}, {room.address}
                      </h2>
                      <ul className="flex gap-4 mb-5 pb-5 border-solid border-b border-gray-300">
                        <li>{room.persons} guests</li>
                        <li>{room.bedrooms} bedrooms</li>
                        <li>{room.beds} beds</li>
                        <li>{room.bathrooms} bath</li>
                      </ul>
                      <p>
                        Get back to nature at this off-grid oasis, located on
                        Finland's rugged and secluded Skjulskäret island. The
                        cabin features eco-friendly design with sustainable wood
                        and expansive windows offering views of the Baltic sea.
                        Explore Archipelago National Park by foot or kayak. A…
                        <a className="font-bold text-sm underline" href="">
                          read more
                        </a>
                      </p>
                    </div>
                    <div className="border-solid border-2 border-gray-400 p-8 rounded-xl">
                      <form action="">
                        <div className="flex">
                          <input
                            className="border-solid border-2"
                            type="text"
                          />
                          <input
                            className="border-solid border-2"
                            type="text"
                          />
                        </div>
                        <select
                          className="w-full border-solid border-2 mb-5"
                          name=""
                          id=""
                        >
                          <option value="">1 guest</option>
                          <option value="">2 guest</option>
                          <option value="">3 guest</option>
                        </select>
                        <button className="flex">Reserve</button>
                        <span className="mb-5 inline-block">
                          You won't be charget yet
                        </span>

                        <div className="mb-5 flex justify-between pb-5 border-solid border-b border-gray-300">
                          <span>$1,408 x 5 nights</span>
                          <span>$7,041</span>
                        </div>
                        <div className="mb-5 flex justify-between">
                          <span>Total before taxes</span>
                          <span>$7,041</span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <ErrorMsg />
        )}
      </div>
    </>
  );
};

export default RoomPage;
