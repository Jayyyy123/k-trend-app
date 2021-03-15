import React from "react";
import "./HomeKdrama.css";

function HomeKdrama() {
  return (
    <div className="home__kdrama">
      <h1>Kdrama</h1>
      <hr />
      <div className="kdrama__container">
        <div className="kdrama__rowContainer">
          <div className="kdrama__rowOne">
            <img
              src="https://1739752386.rsc.cdn77.org/data/images/full/236668/what-the-newly-released-posters-of-do-you-like-brahms-says-about-the-drama.jpg"
              alt=""
            />
            <h1>Do You Like Brahms?</h1>
          </div>
          <div className="kdrama__rowOne">
            <img
              src="https://6.viki.io/image/7efe90823a0c42cca1ae4f793dd1ed03.jpeg?s=900x600&e=t"
              alt=""
            />
            <h1>Backstreet Rookie</h1>
          </div>
        </div>
        <div className="kdrama__rowContainer">
          <div className="kdrama__rowOne">
            <img
              src="https://a.ksd-i.com/a/2020-08-06/128962-862211.jpg"
              alt=""
            />
            <h1>Alice</h1>
          </div>
          <div className="kdrama__rowOne">
            <img
              src="https://6.viki.io/image/da8be0e800ec4f9d9fc387e7ac2a410b.jpeg?s=900x600&e=t"
              alt=""
            />
            <h1>Secret Forest 2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeKdrama;
