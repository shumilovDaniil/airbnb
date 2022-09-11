import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Header from "../../components/Header";
import { RoomService } from "../../services/room.service";
import IRoomPage from "../../types";
import RoomPageItem from "./RoomPageItem";

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
            return <RoomPageItem key={room.id} {...room} />;
          })
        ) : (
          <ErrorMsg />
        )}
      </div>
    </>
  );
};

export default RoomPage;
