import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerServiceWorker } from './service-worker';

// var mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
//   navigator.userAgent.toLowerCase()
// );
// if (mobile) {
//   navigator.serviceWorker.register("firebase-messaging-sw.js").then(function (registration) {
//     ReactDOM.render(<App swRegistration={registration} />);
//   });
// } else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
