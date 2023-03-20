import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4KXneubjHFZH2MhAa1Lzw0oK4zlGIong",
  authDomain: "smarttraining-9718b.firebaseapp.com",
  projectId: "smarttraining-9718b",
  storageBucket: "smarttraining-9718b.appspot.com",
  messagingSenderId: "974231629626",
  appId: "1:974231629626:web:4be32233f184a585c16a03",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
