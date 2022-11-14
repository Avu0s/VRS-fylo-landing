import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Page />
    <Footer />
  </React.StrictMode>
);
