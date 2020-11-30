import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/coins/btc-bitcoin")
      .then(resp => {
        setCoin(resp.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50">
      <div className="">
        <h1>Tester</h1>
      </div>
      <div>
        <div>
          <h2>
            {coin.name}
            <span>{coin.symbol}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
