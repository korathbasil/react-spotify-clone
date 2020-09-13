import React from "react";
import "./MainBody.css";
import Song from "../../Song/Song";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TimerIcon from "@material-ui/icons/Timer";

function MainBody() {
  return (
    <div className="mainBody">
      <div className="mainBody__header">
        <div className="mainBody__headerSearchContainer">
          <SearchIcon />
          <input type="text" />
        </div>
        <div className="mainBody__headerAccount">
          <img
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            alt=""
          />
          <h4>Jessica Willims</h4>
        </div>
      </div>
      <div className="mainBody__albumInfo">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          alt=""
        />
        <div className="mainBody__albumInfoNames">
          <p>PLAYLIST</p>
          <h1>The Everyday Good</h1>
          <p className="mainBody__albumInfoDesc">Best songs of 2020</p>
        </div>
      </div>
      <div className="mainBOdy__songsContainer">
        <div className="mainBody__songsContainerHeader">
          <PlayCircleFilledIcon style={{ fontSize: 80 }} />
          <FavoriteIcon
            style={{ fontSize: 35, marginLeft: 45, color: "green" }}
          />
        </div>
        <div className="mainBody__songsContainerTableItemsContainer">
          <div className="mainBody__songsContainerTableItemsTitle">
            <p>#</p>
            <p>TITLE</p>
          </div>
          <div className="mainBody__songsContainerTableItemsAlbumDuration">
            <p>ALBUM</p>
            <TimerIcon />
          </div>
        </div>
        <div className="mainBody__songListContainer">
          <Song />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
