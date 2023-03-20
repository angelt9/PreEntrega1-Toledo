import React from "react";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
            <h2>SmartTraining</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <Link className="nav-link" to={"/catalogue"}>
                Catálogo
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categoria
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/category/${"supplements"}`}
                    >
                      Suplemento
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/category/${"clothes"}`}
                    >
                      Ropa
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <CardWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
