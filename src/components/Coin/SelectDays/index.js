import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days">
      {!noPTag && <p>Price change in</p>}
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--orange)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#e85d04",
            },
          },
          "& #demo-simple-select-label": {
            color: "var(--white)",
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>1 week</MenuItem>
        <MenuItem value={30}>1 month*</MenuItem>
        <MenuItem value={60}>2 months*</MenuItem>
        <MenuItem value={90}>3 months*</MenuItem>
        <MenuItem value={120}>4 months*</MenuItem>
        <MenuItem value={365}>1 year</MenuItem>
      </Select>
    </div>
  );
}
