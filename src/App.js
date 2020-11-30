import React from "react";
import TestSWR from "./components/TestSWR";

export default function App() {
  return (
    <div className="bg-gray-50">
      <div className="">
        <h1>Tester</h1>
      </div>
      <div>
        <div>
          <h2>SWR</h2>
          <div>
            <TestSWR />
          </div>
        </div>
      </div>
    </div>
  );
}
