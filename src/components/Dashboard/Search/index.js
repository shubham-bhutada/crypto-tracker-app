import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({ search, handleSearchChange }) => {
  
    return (
    <div className="search-wrapper">
      <div className="search-input">
        <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
    </div>
  );
};

export default Search;
