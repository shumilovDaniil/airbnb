import RoomsList from "../components/RoomsList";
import Tabs from "../components/Tabs/Tabs";

const Home = () => {
  return (
    <>
      <div className="container m-auto">
        <Tabs />
        <RoomsList />
      </div>
    </>
  );
};

export default Home;
