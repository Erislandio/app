import React from "react";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import "./header.css";

export const Header = ({ setOpen, open }) => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <span className="menu-icon">
          <IoIosMenu size="40" onClick={() => setOpen(!open)} />
          <h3>TASKAPP</h3>
        </span>
        <div className="search-input">
          <input placeholder="Buscar" type="text" />
          <IoIosSearch color="#2c3e50"/>
        </div>
      </div>
    </header>
  );
};
