import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Header from "../common/Header";
import Button from "../common/Button";
import TabsComponent from "../Dashboard/Tabs";
import { get100Coins } from "../../functions/get100Coins";
import { Link } from "react-router-dom";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("coins:" + coins);
    const allCoins = await get100Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("useffect: "+myWatchlist);
  }, [myWatchlist]);

  return (
    <div>
      {isLoading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/dashboard">
                  <Button text={"Dashboard"} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              {/* {myWatchlist && (
                <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
              )} */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
