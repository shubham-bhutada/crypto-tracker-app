import { CircularProgress, createTheme } from "@mui/material";
import React from "react";
import "./style.css";

const Loader = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E85D04",
      },
    },
  });
  return (
    <div className="loader-container">
      <CircularProgress theme={theme}/>
    </div>
  );
};

export default Loader;
