import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar/Sidebar";
import MainBody from "./MainBody/MainBody";
import Footer from "./Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <MainBody />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
