import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const RoomPage = () => {
  const param = useParams();

  return (
    <>
      <Header />
      <div>Page {param.roomId}</div>
    </>
  );
};

export default RoomPage;
