import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/common/Footer";
import Error from "../components/Error";

const DashBoardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // changing my paginated coins array 
  const handlePageChange = (e, value) => {
    setPage(value);
    let prevIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  // handles the search string to set the value of state(search) 
  function handleSearchChange(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  // filters the coins based on the search input and then provides it to the Tabs component
  let filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  //  getData fetches the coins from the get100Coins function and then sets them in other states; coins and paginatedCoins
  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    } else {
      myCoins?.length === 0 && <Error />
    }

  };

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} handleSearchChange={handleSearchChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            search={search}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default DashBoardPage;
