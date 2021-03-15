import React from "react";
import "./MostPopular.css";
import SearchIcon from "@material-ui/icons/Search";

function MostPopular() {
  return (
    <div className="mostPopular">
      <h1>Most Popular</h1>
      <hr />
      <div className="mostPopular__content">
        <ul>
          <li>Gummy – You Are My Everything [Hangul + Romanization]</li>
          <li>CHEN (EXO) & Punch – Everytime [Hangul + Romanization]</li>
          <li>Crush – Beautiful [Hangul + Romanization]</li>
          <li>t Yoonmirae – Always [Hangul + Romanization]</li>
          <li>Loco & Punch – Say Yes [Hangul + Romanization]</li>
        </ul>
        <div className="mostPopular__search">
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
            rel="stylesheet"
          ></link>
          <input placeholder="Search Artists or Lyrics" type="text" />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
