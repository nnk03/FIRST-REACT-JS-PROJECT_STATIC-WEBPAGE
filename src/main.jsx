import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import About from "./About";
import Interests from "./Interests";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// {
/* <div id="infoid">
      <SmallApp />
    </div> */
// }
// function SmallApp() {
//   return (
//     <>
//       <About />
//       <Interests />
//     </>
//   );
// }
// const smalldiv = document.getElementById("infoid");
// ReactDOM.createRoot(smalldiv).render(<SmallApp />);
