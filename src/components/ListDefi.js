/**
 * List DeFi Coins
 */
import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";
import CoinItem from "./CoinItem";

const ListDefi = () => {
  const { data, error, isValidating } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance_defi&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d",
    fetcher
  ); // /coins is the cache key
  //console.log("*** data: ", data);
  //console.log("*** isValidating: ", isValidating);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

      {data.map(coin => (
        <CoinItem key={coin.id} {...coin} />
      ))}
    </>
  );
};

export default ListDefi;
