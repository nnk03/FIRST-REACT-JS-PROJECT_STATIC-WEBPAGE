import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import emailLogo from "./assets/Mail.png";
import linkedinLogo from "./assets/linkedin.png";

export default function Info() {
  return (
    <>
      <h1 className="name">NEERAJ KRISHNA N</h1>
      <h2 className="desc">College Student</h2>
      <h3 className="website">
        <a href="#">neerajkrishnan</a>
      </h3>
      <div className="email">
        <a href="https://mail.google.com" target="_blank">
          <img src={emailLogo} alt="email-logo" className="email-icon" />
          <p>Mail</p>
        </a>
      </div>
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/neeraj-krishna-n-bb38b3243/"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            alt="linkedin-logo"
            className="linkedin-icon"
          />
          <p>LinkedIn</p>
        </a>
      </div>
    </>
  );
}
