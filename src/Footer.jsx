import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import twitter from "./assets/TwitterIcon.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://twitter.com/krishnaneeraj03">
          <div className="twitter"></div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100075288852823"
          target="_blank"
        >
          <div className="facebook"></div>
        </a>
        <a href="https://www.instagram.com/neerajkrishnan03/" target="_blank">
          <div className="instagram"></div>
        </a>
        <a href="https://github.com/nnk03" target="_blank">
          <div className="github"></div>
        </a>
      </footer>
    </>
  );
}
