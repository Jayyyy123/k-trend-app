import React from "react";
import "./HomeKpop.css";

function HomeKpop() {
  return (
    <div className="home__kpop">
      <h1>KPOP</h1>
      <hr />
      <div className="kpop__container">
        <div className="kpop__rowOne">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e6/Iz%2AOne_-_Bloom%2AIz.png"
            alt=""
          />
          <h1>IZ*ONE - Bloom*Iz</h1>
        </div>
        <div className="kpop__rowOne">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png"
            alt=""
          />
          <h1>BTS - Dynamite</h1>
        </div>
        <div className="kpop__rowOne">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/db/Blackpink_%26_Selena_Gomez_-_Ice_Cream.png"
            alt=""
          />
          <h1>BLACKPINK - Ice Cream (with Selena Gomez)</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeKpop;
