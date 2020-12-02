import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const CoinItem = ({ id, name, image, current_price }) => {
  return (
    <Accordion title={name} image={image}>
      <div className="bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img className="w-10 h-10" src={image} alt={name} />
            <Link
              to={{
                pathname: `/kurse/${id}`,
                state: {
                  name,
                  image,
                  id
                }
              }}
            >
              <div className="font-medium border-b border-gray-400 transition duration-300 ease-in-out hover:border-yellow-400">
                {name}
              </div>
            </Link>
          </div>
          <div>{current_price}</div>
        </div>
      </div>
    </Accordion>
  );
};

CoinItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  current_price: PropTypes.number
};

export default CoinItem;
