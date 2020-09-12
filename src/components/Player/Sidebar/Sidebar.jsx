import React, { useEffect } from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import SpotifyWebApi from "spotify-web-api-js";
//Material UI elements
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// Context
import { useStateContext } from "../../../StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateContext();
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SidebarOptions Icon={HomeIcon} title="home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOptions title={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;
