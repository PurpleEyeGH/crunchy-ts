import React from "react";
import "../global/buttons.css";
import "./header.css";

function Header() {
  return (
    /*<AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>*/
    <nav className="nav" role="navigation">
      <ul className="menu">
        <div className="group">
          <li>Crunchy</li>
        </div>
        <div className="group">
          <li>
            <label className="input-svg"></label>
            <input
              className="input-crunchy"
              type="text"
              name="search"
              id="search"
              placeholder="Tag, category, person"
            />
          </li>
        </div>
        <div className="group">
          <li>
            <input
              className="button-crunchy button-crunchy-red button-separator"
              type="button"
              value="Create a meme"
            />
            <input
              className="button-crunchy button-crunchy-purple"
              type="button"
              value="Login"
            />
          </li>
        </div>
      </ul>
      <div className="border-top"></div>
    </nav>
  );
}

export default Header;
