import React from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css"

function PaginationComponent({ page, handlePageChange }) {
  
  return (
    <div className="pagination-container"
      spacing={2}
    >
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "#fff",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "var(--orange) !important",
            color: "#fff !important",
            borderColor: "var(--orange) !important",
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid #333",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent;