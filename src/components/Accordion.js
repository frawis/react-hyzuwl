import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, image, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <div
        className={`bl-accordion__title flex items-center justify-between bg-gray-100 rounded-tr-md rounded-tl-md border px-2 py-1 ${
          isOpen ? "open bg-yellow-300" : ""
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={image} alt={name} className="w-8 h-8" />
        <div>{title}</div>
      </div>
      <div
        className={`bl-accordion__item bg-white rounded-br-md rounded-bl-md ${
          !isOpen ? "collapsed" : ""
        }`}
      >
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
