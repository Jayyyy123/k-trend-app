import React from "react";
import "./Home.css";
import HomeKpop from "./HomeKpop";
import HomeKdrama from "./HomeKdrama";
import MostPopular from "./MostPopular";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import HomeTrend from "./HomeTrend";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="homeImage__title">
          <h1>Trend</h1>
          <MusicNoteIcon />
        </div>
        <hr />
        <div>
          <HomeTrend />
        </div>
        <div className="home__center">
          <div className="left__container">
            <HomeKpop />
            <HomeKdrama /> 
          </div>
          <div className="right__container">
            <MostPopular />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
