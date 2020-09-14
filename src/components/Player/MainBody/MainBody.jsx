import React from "react";
import "./MainBody.css";
import Song from "../Song/Song";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TimerIcon from "@material-ui/icons/Timer";
import { useStateContext } from "../../../StateProvider";

function MainBody({ spotify }) {
  const [{ weekly_playlist }, dispatch] = useStateContext();
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
        <img src={weekly_playlist?.images[0].url} alt="" />
        <div className="mainBody__albumInfoNames">
          <p>PLAYLIST</p>
          <h1>{weekly_playlist?.name}</h1>
          <p className="mainBody__albumInfoDesc">
            {weekly_playlist?.description}
          </p>
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
          {weekly_playlist?.tracks.items.map((item) => {
            // console.log(item.track);
            return (
              <Song
                track={item.track}
                index={weekly_playlist.tracks.items.indexOf(item) + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainBody;
