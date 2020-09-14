import React from "react";
import "./Song.css";

function Song({ track, index }) {
  return (
    <div className="song">
      <div className="song__left">
        <div className="song__numberContainer">
          <p>{index}</p>
        </div>
        <img src={track?.album.images[0].url} alt="" />
        <div className="song__names">
          <p className="song__title">{track?.name}</p>
          <p className="song__artist">
            {track?.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="song__right">
        <p>{track?.album.name}</p>
        <p>05:00</p>
      </div>
    </div>
  );
}

export default Song;
