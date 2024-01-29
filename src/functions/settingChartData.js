import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices2.map((item) => convertDate(item[0])),
      datasets: [
        {
          data: prices1.map((item) => item[1]),
          label: "Crypto 1",
          borderColor: "#e85d04",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          data: prices2.map((item) => item[1]),
          label: "Crypto 2",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "#80ed99",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((item) => convertDate(item[0])),
      datasets: [
        {
          data: prices1.map((item) => item[1]),
          // borderColor: "#e85d04",
          borderWidth: 1,
          fill: true,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          tension: 0.25,
          borderColor: "#ffb4a2",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
