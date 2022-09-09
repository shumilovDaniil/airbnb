import { useQuery } from "@tanstack/react-query";
import { RoomService } from "../services/room.service";
import RoomItem from "./RoomItem";
import { IoMdClose } from "react-icons/io";
import IHome from "../types";

const RoomsList = () => {
  const { isLoading, data: response } = useQuery(["rooms"], () =>
    RoomService.getAll()
  );

  return (
    <div className="flex gap-3 gap-y-10 flex-wrap justify-between">
      {isLoading ? (
        <div>Loading..</div>
      ) : response?.data.length ? (
        response?.data.map((home: IHome) => (
          <RoomItem key={home.id} {...home}></RoomItem>
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

export default RoomsList;
