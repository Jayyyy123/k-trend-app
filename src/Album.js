import React from "react";
import "./Album.css";
import AlbumBody from "./AlbumBody";
import AlbumLyrics from "./AlbumLyrics";

function Album() {
  return (
    <div className="album">
      <div className="album__container">
        <AlbumBody image="https://upload.wikimedia.org/wikipedia/en/d/db/Blackpink_%26_Selena_Gomez_-_Ice_Cream.png" />
        <AlbumLyrics />
      </div>
    </div>
  );
}

export default Album;
