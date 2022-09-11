import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder, MdIosShare } from "react-icons/md";
import { RiMedal2Fill } from "react-icons/ri";
import IRoomPage from "./../../types/index";

const RoomPageItem = (room: IRoomPage) => {
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
        <div className="flex flex-row gap-x-10">
          <div className="flex-[0_1_70%]">
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
              Get back to nature at this off-grid oasis, located on Finland's
              rugged and secluded Skjulskäret island. The cabin features
              eco-friendly design with sustainable wood and expansive windows
              offering views of the Baltic sea. Explore Archipelago National
              Park by foot or kayak. A…
              <a className="font-bold text-sm underline" href="">
                read more
              </a>
            </p>
          </div>
          <div className="flex-[0_1_30%] border-solid border-2 border-gray-400 px-8 py-6 rounded-xl">
            <form className="flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    className="w-full p-2 border-gray-400 border-solid border-2"
                    type="text"
                  />
                  <input
                    className="w-full p-2 border-gray-400 border-solid border-2"
                    type="text"
                  />
                </div>
                <select className="w-full border-gray-400 p-2 border-solid border-2">
                  <option value="">1 guest</option>
                  <option value="">2 guest</option>
                  <option value="">3 guest</option>
                </select>
              </div>
              <button className="flex justify-center text-white w-full p-2 text-xl bg-purple-600">
                Reserve
              </button>
              <span className="inline-block text-center w-full">
                You won't be charget yet
              </span>

              <div className="flex justify-between pb-3 border-solid border-b border-gray-300">
                <span className="underline">
                  ${room.price.priceItems[0].title}
                </span>
                <span>${room.price.priceItems[0].amount}</span>
              </div>
              <div className="flex justify-between">
                <span>Total before taxes</span>
                <span>${room.price.total}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPageItem;
