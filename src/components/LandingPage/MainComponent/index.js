import React from "react";
import "./style.css";
import Button from "../../common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

const MainComponent = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="left-component">
          <motion.h1
            className="track-crypto-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Track Crypto
          </motion.h1>
          <motion.h1
            className="real-time-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Real Time.
          </motion.h1>
          <motion.p
            className="info-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </motion.p>
          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, scaleZ: 0.5 }}
            animate={{ opacity: 1, scaleZ: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/dashboard">
              <Button
                text={"Dashboard"}
                onClick={() => console.log(" Dashboard Btn clicked")}
              />
            </Link>
            <RWebShare
              data={{
                text: "Crypto Dashboard made using React JS.",
                url: "https://loquacious-frangipane-6d0320.netlify.app/",
                title: "CryptoDashboard.",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button text={"Share"} outlined={true} />
            </RWebShare>
          </motion.div>
        </div>
        <div className="phone-container">
          <img src={gradient} alt="gradient" className="gradient" />
          <motion.img
            src={iphone}
            alt="iphone"
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
