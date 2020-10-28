import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BasicApp from "./react-getting-started/gettingStarted/Basics";
import GitHubApp from "./react-getting-started/gitHubCards/GitHubCards";
import StarMatch from "./react-getting-started/starMatchGame/StarMatchGame";

ReactDOM.render(
  <React.StrictMode>
    <div className="module">
      <BasicApp />
    </div>
    <div className="module">
      <GitHubApp title={"The GitHub Cards App"} />
    </div>
    <div className="module">
      <StarMatch />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
