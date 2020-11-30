import React from "react";
import useSWR from "swr";
import Loader from "./Loader";
import "./testswr.css";

import Coin from "./Coin";

const DefiList = () => {
  const { data: defiglobal, error } = useSWR(
    "https://api.coingecko.com/api/v3/global/decentralized_finance_defi"
  );

  const { data: deficoins } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance_defi&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d"
  );
  console.log(deficoins);

  if (error) return <div>failed to load</div>;
  if (!defiglobal)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="container">
      <div>
        <h3>DeFi Global</h3>
        <div>{defiglobal.data.top_coin_name}</div>
      </div>
      <div>
        <h3>DeFi Coins</h3>
        <div className="grid">
          {deficoins &&
            deficoins.map(coin => (
              <Coin key={coin.market_cap_rank} coin={coin} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DefiList;
