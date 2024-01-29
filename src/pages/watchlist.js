import React, { useEffect, useState } from "react";
import { get100Coins } from "../functions/get100Coins";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import Button from "../components/common/Button";
import TabsComponent from "../components/Dashboard/Tabs";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  console.log("watchlist: " + coins);
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const allCoins = await get100Coins();
    console.log("100 coins: "+allCoins);
    if (coins && allCoins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    console.log("set my coins: "+(allCoins.filter((item) => coins.includes(item.id))));
    setIsLoading(false);
  };

  return (
    <div>
      {isloading || !coins ? (
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
                  <Button
                    text={"Dashboard"}
                    onClick={() =>
                      console.log("watchlist back-to-dashboard btn clicked")
                    }
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
