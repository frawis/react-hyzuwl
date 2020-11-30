import React from "react";
import useSWR from "swr";
import Loader from "./Loader";
import "./testswr.css";

const TestSWR = () => {
  const { data: singlecoin, error } = useSWR(
    "https://api.coinpaprika.com/v1/coins/eth-ethereum"
  );
  const { data: topseven } = useSWR(
    "https://api.coingecko.com/api/v3/search/trending"
  );

  const { data: defiglobal } = useSWR(
    "https://api.coingecko.com/api/v3/global/decentralized_finance_defi"
  );

  const { data: deficoins } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance_defi&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d"
  );

  console.log(deficoins);
  if (error) return <div>failed to load</div>;
  if (!singlecoin || !topseven || !defiglobal)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="container">
      <h2>{singlecoin.name}</h2>
      {singlecoin.links_extended &&
        singlecoin.links_extended.map((link, index) => (
          <div key={index}>
            <a href={link.url}>{link.url}</a>
          </div>
        ))}
      <div>
        <h3>Top-7 Trending Coins (Coingecko)</h3>
        <div>
          {topseven.coins &&
            topseven.coins.map(coin => (
              <div key={coin.item.market_cap_rank}>
                <div>
                  <img src={coin.item.thumb} alt={coin.item.name} />
                  <p>
                    {coin.item.name} <span>{coin.item.symbol}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h3>DeFi Global</h3>
        <div>{defiglobal.data.top_coin_name}</div>
      </div>
      <div>
        <h3>DeFi Coins</h3>
        {deficoins &&
          deficoins.map(coin => (
            <div style={{ marginBottom: "8px" }}>
              <div className="flex-c">
                <div className="flex-c">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width="32"
                    height="32"
                  />
                  <a>
                    {coin.name} <span>{coin.symbol}</span>
                  </a>
                </div>
              </div>
              <div className="flex-c">
                <div>{coin.market_cap_rank}</div>
                <div>{coin.price_change_percentage_1h_in_currency}</div>
                <div>{coin.price_change_percentage_24h}</div>
                <div>{coin.current_price}</div>
              </div>
            </div>
          ))}
        <div />
      </div>
    </div>
  );
};

export default TestSWR;
