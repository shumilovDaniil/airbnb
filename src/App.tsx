import React, { useEffect } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "./services/user.service";
import RoomsList from "./components/RoomsList";

function App() {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(["users"], () => UserService.getAll());

  return (
    <>
      <Header />
      <div className="container m-auto px-4">
        <Tabs />

        <RoomsList />

        {/* {isLoading ? (
          <div>Loading.......</div>
        ) : response?.data.length ? (
          <div>
            {response.data.map((user: any) => {
              return <div>{user.name}</div>;
            })}
          </div>
        ) : (
          <div>Not found</div>
        )} */}
      </div>
    </>
  );
}

export default App;
