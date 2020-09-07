import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
//Material UI elements
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
