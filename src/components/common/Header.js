import React from "react";
import { NavLink } from "react-router-dom";
import "./common.css";

function Header(props) {
  const activeStyle = props.activeStyle
    ? { color: "" }
    : { color: "#b56969", fontWeight: "900" };

  return (
    <header className="header">
      <div className="nav">
        <nav className="nav-menu">
          <NavLink
            style={{ color: "#22264b" }}
            activeStyle={activeStyle}
            exact
            to="/QuotesWebsite"
            className="menuItem"
          >
            Home
          </NavLink>{" "}
          <NavLink
            style={{ color: "#22264b" }}
            activeStyle={activeStyle}
            to="/QuotesWebsite/quotes"
            className="menuItem"
          >
            Quotes
          </NavLink>{" "}
          <NavLink
            style={{ color: "#22264b" }}
            activeStyle={activeStyle}
            to="/QuotesWebsite/addquote"
            className="menuItem"
          >
            Add Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
