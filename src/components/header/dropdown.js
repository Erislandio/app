import React from "react";
import cookieJs from "js-cookie";
import { Link } from "react-router-dom";

export const Dropwdown = ({ open }) => {
  const logout = () => {
    cookieJs.remove("user");
  };

  return open ? (
    <div className="dropdown">
      <div className="dropdown-default">
        <ul>
          <li>
            <Link to="/account">My account</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>
    </div>
  ) : null;
};
