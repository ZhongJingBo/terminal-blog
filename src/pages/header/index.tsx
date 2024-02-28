import React, { FC } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <a className="header_title"> iTerm</a>
      </div>
      <nav className="header_nav">
        <div className="header_nav_item">
          {" "}
          <NavLink to="/home"> Home </NavLink>
        </div>
        <div className="header_nav_item">
          {" "}
          <NavLink to="/posts"> Posts </NavLink>{" "}
        </div>
        <div className="header_nav_item">
          {" "}
          <NavLink to="/home"> Weekly </NavLink>
        </div>
        <div className="header_nav_item">
          {" "}
          <NavLink to="/home"> About </NavLink>{" "}
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;