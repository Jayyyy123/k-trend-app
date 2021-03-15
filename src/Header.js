import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__container">
      <link
        href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap"
        rel="stylesheet"
      ></link>
      <Link to="/" className="header__logo">
        <span>Ktrend</span>
      </Link>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
              rel="stylesheet"
            ></link>
            <span className="header_optionLineOne">HOME</span>
          </div>
        </Link>
        <Link to="/featured" className="header__link">
          <div className="header__option">
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
              rel="stylesheet"
            ></link>
            <span className="header_optionLineOne">FEATURED</span>
          </div>
        </Link>
        <Link to="/korean" className="header__link">
          <div className="header__option">
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
              rel="stylesheet"
            ></link>
            <span className="header_optionLineOne">KOREAN</span>
          </div>
        </Link>
        <Link to="/english" className="header__link">
          <div className="header__option">
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
              rel="stylesheet"
            ></link>
            <span className="header_optionLineOne">ENGLISH</span>
          </div>
        </Link>
      </div>

      <div className="header__search">
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
          rel="stylesheet"
        ></link>
        <input placeholder="Search" type="text" />
        <SearchIcon />
      </div>

      <div className="phoneView__search">
        <SearchIcon />
      </div>
      {/* Menu icon */}
      <div className="header__menu"></div>
    </div>
  );
}

export default Header;
