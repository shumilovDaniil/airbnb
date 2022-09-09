import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import IRoom from "../types";

const RoomItem: FC<IRoom> = (props) => {
  const { id, city, country, distance, images, rating, date, price } = props;

  return (
    <div className="flex flex-col relative" style={{ flex: "0 1 22%" }}>
      <button className="absolute right-1 top-1 p-1">
        <MdFavoriteBorder className="text-gray-500" />
      </button>
      <Link to={`rooms/${id}`}>
        <div>
          <img
            max-width="235px"
            height="223px"
            className="rounded-xl object-cover"
            src={images?.[0]}
            alt=""
          />
        </div>
        <div className="content">
          <div className="flex gap-2 justify-between text-xs py-1">
            <h4 className="font-bold ">
              {city}, {country}
            </h4>
            <span className="flex gap-1 items-center text-gray-600">
              <AiFillStar className="text-[11px]" />
              {rating}
            </span>
          </div>
          <div className="info text-xs text-gray-500">
            <span className="block">{distance} kilometers</span>
            <span>
              {date.start} - {date.end}
            </span>
          </div>
          <div className="price">
            <span className="text-sm">
              {price.night ? (
                <span>${price?.night} night</span>
              ) : (
                <span>Price to be confirmed</span>
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomItem;
