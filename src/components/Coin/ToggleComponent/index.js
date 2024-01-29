import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css";

export default function ToggleComponent({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-container">
      <ToggleButtonGroup
        color="primary"
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "#f08e51 !important",
          },
          borderColor: "var(--light-orange)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--orange)!important",
            borderColor: "unset",
            color: "var(--light-orange) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--light-orange) !important",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
