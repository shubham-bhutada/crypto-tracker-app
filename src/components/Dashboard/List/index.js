import React, { useState } from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumbers";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

function List({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <Tooltip title="Coin Image" placement="bottom-start">
          <td className="td-img">
            <img src={coin.image} className="coin-logo-td" alt="logo" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-info-flex">
            <div className="coin-name-flex">
              <h3 className="coin-symbol coin-symbol-list">{coin.symbol}</h3>
              <p className="coin-name coin-name-list">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
          {coin.price_change_percentage_24h >= 0 ? (
            <td className="td-price-chip-list">
              <div className="info-flex-list" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
              </div>
            </td>
          ) : (
            <td className="td-price-chip-list">
              <div className="info-flex-list" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trending-icon-list" />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Price In USD in last 24hr" placement="bottom-end">
          {/* {coin.price_change_percentage_24h >= 0 ? (
            <td className="current-price  td-current-price current-price-center">
              ${coin.current_price.toLocaleString()}
            </td>
          ) : (
            <td className="current-price current-price-red td-current-price current-price-center">
              ${coin.current_price.toLocaleString()}
            </td>
          )} */}
          <td>
            <p
              className={`coin-price coin-price-list desktop-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-price coin-price-list mobile-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              $
              {convertNumber(
                coin.current_price < 1
                  ? parseFloat(coin.current_price).toFixed(3)
                  : parseInt(coin.current_price)
              )}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="coin-name td-totalVolume">
            <span className="coin-total_volume">
              {convertNumber(coin.total_volume.toLocaleString())}
            </span>
          </td>
        </Tooltip>
        <Tooltip title="Market Capital" placement="bottom-end">
          <td className="coin-name td-marketCap">
            <span className="coin-total_volume">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-td-cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${convertNumber(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(event) => {
              event.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
      </motion.tr>
    </Link>
  );
}

export default List;
