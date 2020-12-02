/**
 * List DeFi Coins
 */
import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  useEffect(() => {
    const results = data.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <div className="mb-4">
        <input
          type="search"
          placeholder="Suche..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      {searchResults.map(coin => (
        <CoinItem key={coin.id} {...coin} />
      ))}
    </>
  );
};

export default ListDefi;
