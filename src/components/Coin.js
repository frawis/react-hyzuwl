import React from "react";
//import useSWR from "swr";
import "./coin.css";
//const fetcher = (...args) => fetch(...args).then(res => res.json());
import Accordion from "./Accordion";

export const Coin = ({ coin }) => {
  //const { id } = coin;
  //const url = "https://api.coingecko.com/api/v3/coins/" + id;

  //const { data, error } = useSWR(url, fetcher);

  //if (error) return <h1>Something went wrong!</h1>;
  if (!coin) return <h1>Loading...</h1>;

  return (
    <>
      <Accordion title={coin.name}>
        <div className="Card bg-yellow-300">
          <span className="Card--id">{coin.symbol}</span>
          <img className="Card--image" src={coin.image} alt={coin.name} />
          <h1 className="Card--name">{coin.name}</h1>
          <div>
            <span>{coin.current_price}</span>
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default Coin;
