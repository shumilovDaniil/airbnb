import React, { useEffect } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RoomsList from "./components/HomesList";

function App() {
  return (
    <>
      <Header />
      <div className="container m-auto px-4">
        <Tabs />
        <RoomsList />
      </div>
    </>
  );
}

export default App;
