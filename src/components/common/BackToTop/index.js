import React from "react";
import "./style.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

const BackToTop = () => {
  // Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="back-to-top-btn" id="myBtn" onClick={topFunction}>
      <NorthRoundedIcon />
    </div>
  );
};

export default BackToTop;
