import React from "react";
import "./HomeTrend.css";
import { Link } from "react-router-dom";

function HomeTrend() {
  return (
    <div className="homeImage__container">
      <div className="homeImage__rowOne">
        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://upload.wikimedia.org/wikipedia/en/d/db/Blackpink_%26_Selena_Gomez_-_Ice_Cream.png"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered ">
              BLACKPINK - Ice Cream (with Selena Gomez)
            </div>
          </Link>
        </div>

        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://ibighit.com/bts/images/bts/discography/dynamite/Q7gBkUusiDcIYljQOMX9ow6W.jpg"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered">BTS - Dynamite</div>
          </Link>
        </div>

        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://www.allkpop.com/upload/2020/08/content/191657/1597870661-itzymain.jpg"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered">ITZY - Not Shy</div>
          </Link>
        </div>
      </div>

      <div className="homeImage__rowTwo">
        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99c08eac-1777-4459-81b0-341be2da5190/de2k72p-c507208d-2037-40d5-a413-e293b9930a70.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTljMDhlYWMtMTc3Ny00NDU5LTgxYjAtMzQxYmUyZGE1MTkwXC9kZTJrNzJwLWM1MDcyMDhkLTIwMzctNDBkNS1hNDEzLWUyOTNiOTkzMGE3MC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-CkMejl-JLgxAqz1ncv88Uvsqk81LyQM4oCwrwvfIws"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered">(G)I-DLE - DUMDi DUMDi</div>
          </Link>
        </div>

        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://vignette.wikia.nocookie.net/stray-kids/images/4/41/Stray_Kids_IN_Life_Digital_Album_Cover.jpg/revision/latest?cb=20200912230159"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered">Stray Kids - Back Door</div>
          </Link>
        </div>

        <div className="trendImage__container">
          <Link to="/album" className="album_link">
            <img
              className="trend__image"
              src="https://vignette.wikia.nocookie.net/everglow/images/4/42/-77.82X-78.29_Digital_Album_Cover.jpeg/revision/latest?cb=20200921105532"
              alt=""
            />
            <div className="trendImage__layer"></div>
            <div className="trendImage__centered">EVERGLOW - LA DI DA</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeTrend;
