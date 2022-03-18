import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";
import "./assets/Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="app__section">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="app__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
