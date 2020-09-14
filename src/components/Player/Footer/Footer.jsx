import React, { useState } from "react";
import "./Footer.css";
import Slider from "@material-ui/core/Slider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

function Footer(spotify) {
  const [playerStatus, setPlayerStatus] = useState(false);
  const playHandler = () => {
    // playerStatus ? spotify.pause : spotify.play;
  };
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          alt=""
          className="footer__albumArt"
        />
        <div className="footer__albumNames">
          <h3 className="footer__albumTitle">Good night</h3>
          <p className="footer__albumArtist">John Legend</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleFilledIcon onClick={playHandler} />
        <SkipNextIcon />
        <RepeatIcon />
        {/* <Slider value={30} aria-labelledby="continuous-slider" /> */}
      </div>
      <div className="footer__right">
        <div className="footer__volumeSlider">
          <Slider value={30} aria-labelledby="continuous-slider" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
