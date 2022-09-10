import { useQuery } from "@tanstack/react-query";
import { RoomService } from "../services/room.service";
import RoomItem from "./RoomItem";
import { IoMdClose } from "react-icons/io";
import IHome from "../types";
import ErrorMsg from "./ErrorMsg/ErrorMsg";

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
        <ErrorMsg />
      )}
    </div>
  );
};

export default RoomsList;
