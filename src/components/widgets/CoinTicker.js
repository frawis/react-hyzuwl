import React from "react";
import PropTypes from "prop-types";

import "./cointicker.css";

const CoinTicker = ({ coin, widget }) => {
  let widthData = "";
  if (parseInt(widget.width) !== 0) {
    widthData = widget.width + "px";
  }

  return (
    <div
      className={"br_coin_widget__app"}
      style={{ backgroundColor: widget?.color, width: widthData }}
    >
      <header className="br_coin_widget__header">
        <div>
          <img src={coin.image} alt={coin.name} width="32" />
        </div>

        <h3>{coin.name}</h3>
      </header>
      <div className="br_coin_widget__inner">
        <div className="br_coin_widget__coin" key={coin.market_cap_rank}>
          <div className="br_coin_widget__price">
            {coin.current_price}
            <span>{coin.market_cap_change_percentage_24h}</span>
          </div>
          <div>
            <table className="br_coin_widget__details">
              <tbody>
                <tr>
                  <th>Rank</th>
                  <td># {coin.market_cap_rank}</td>
                </tr>
                <tr>
                  <th>Marktkapitalisierung</th>
                  <td>{coin.market_cap}</td>
                </tr>
                <tr>
                  <th>Marktkapitalisierung</th>
                  <td>{coin.market_cap}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="br_coin_widget__powered_by">
        powered by{" "}
        <a href="#" target="_blank" rel="noopener nofollow">
          BR
        </a>
      </div>
    </div>
  );
};
CoinTicker.propTypes = {
  coin: PropTypes.object,
  widget: PropTypes.object
};
export default CoinTicker;
