import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../fetcher";

const Coins = () => {
  const history = useHistory();
  const location = useLocation();
  const { name, image, id } = location.state;

  const { data, error, isValidating } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true`,
    fetcher
  ); // /coins is the cache key
  //console.log("*** data: ", data);
  //console.log("*** isValidating: ", isValidating);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <div className="py-2 px-4 bg-gray-200">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="bg-yellow-400 text-gray-800 px-4 py-2 text-sm uppercase focus:outline-none"
        >
          Zurück
        </button>
      </div>
      <div className="flex items-center ">
        <img src={image} alt={name} className="w-8 h-8" />
        <p className="text-2xl font-bold">{name}</p>
      </div>
      <div>{data.market_cap_rank}</div>
      <div>{data.current_price}</div>
      <div>{data.description.de}</div>
      <div>
        <ul>
          {data.categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Price</h3>
        {data.market_data.ath.usd}
      </div>
    </div>
  );
};

export default Coins;
