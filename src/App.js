import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WatchlistPage from "./pages/watchlist";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e85d04",
      },
    },
  });

  return (
    <div className="App">
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
