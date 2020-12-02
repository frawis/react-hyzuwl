import React from "react";
import ListDefi from "../components/ListDefi";

const Home = () => {
  return (
    <div>
      <h1>Willkommen</h1>
      <div className="max-w-screen-xl px-4">
        <ListDefi />
      </div>
    </div>
  );
};

export default Home;
