import React from "react";
import WidgetForm from "../components/WidgetForm";

const Widgets = () => {
  return (
    <div>
      <h1>Widgets</h1>
      <div className="max-w-screen-xl px-4">Widget auswählen</div>
      <div>
        <WidgetForm />
      </div>
    </div>
  );
};

export default Widgets;
