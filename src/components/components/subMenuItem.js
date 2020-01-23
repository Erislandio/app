import React from "react";
import { Link } from "react-router-dom";

export const SubmenuItem = ({ title, link, icon: Icon }) => {
  return (
    <li className="menu-item">
      <Link to={link}>{title}</Link> <Icon />
    </li>
  );
};
