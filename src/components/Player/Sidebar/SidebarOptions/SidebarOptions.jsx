import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions__icon" />}
      {Icon ? (
        <h4 classNmae="sidebarOptions__title">{title}</h4>
      ) : (
        <p className="sidebarOptions__title">{title}</p>
      )}
    </div>
  );
}

export default SidebarOptions;
