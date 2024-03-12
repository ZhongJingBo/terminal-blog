import React, { FC } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <a className="header_title"> Blog</a>
      </div>
    </header>
  );
};

export default Header;

export const Nav = () => {
  return (
    <div className={styles.nav}>
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
          <NavLink to="/reprint"> Reprint </NavLink>
        </div>
        <div className="header_nav_item">
          {" "}
          <NavLink to="/about"> About </NavLink>{" "}
        </div>
      </nav>
    </div>
  );
};
