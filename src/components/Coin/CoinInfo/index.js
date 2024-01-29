import React, { useState } from "react";
import "./style.css";
const CoinInfo = ({ title, desc }) => {
  const [flag, setflag] = useState(false);

  const shortDesc =
    desc.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  return (
    <div className="grey-wrapper coin-description">
      <h1>{title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (flag ? longDesc : shortDesc) : desc,
        }}
        className="info-p"
        onClick={() => setflag(!flag)}
      />
    </div>
  );
};

export default CoinInfo;
