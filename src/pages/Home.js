import React from "react";
import WidgetForm from "../components/WidgetForm";

const Home = () => {
  return (
    <div>
      <h1>Willkommen</h1>
      <div className="max-w-screen-xl px-4">Home</div>
      <div>
        <WidgetForm />
      </div>
    </div>
  );
};

export default Home;
