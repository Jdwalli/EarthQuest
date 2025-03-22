import React from "react";
import { APP_ROUTES } from "../config/UrlConfig";

const NavBar: React.FC = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-div">
          <a href="/" className="link-block-7 w-inline-block w--current">
            <span>LOGO here</span>
          </a>
        </div>

        <div className="nav-menu">
          {Object.entries(APP_ROUTES).map(([key, route]) => {
            return (
              <a
                key={key}
                href={route.link}
                className="nav-link w-inline-block"
              >
                <div className="nav-link-text">{route.title}</div>
              </a>
            );
          })}
        </div>

        <div className="nav-controls-container">
          <div className="nav-controls">
            <button className="nav-link user">Settings</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
