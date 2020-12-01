import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoinItem = ({ id, name, image, current_price }) => {
  return (
    <div className="Coin--wrapper">
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
        <div className="Coin--content">
          <div className="Coin--header">
            <img className="Coin--image" src={image} alt={name} />
            <div>{name}</div>
          </div>
          <div>{current_price}</div>
        </div>
      </Link>
    </div>
  );
};

CoinItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  current_price: PropTypes.number
};

export default CoinItem;
