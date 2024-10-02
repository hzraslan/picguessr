import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Firebase, FirebaseContext } from "./firebase/firebase-init";
import 'bootstrap/dist/css/bootstrap.css';

const firebase = new Firebase();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
