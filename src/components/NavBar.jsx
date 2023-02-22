import React from "react";
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
            <h1>SmartTraining</h1>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                      Suplementos
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

              <Link className="nav-link" to={"/catalogue"}>
                Catalogo
              </Link>
            </ul>
          </div>

          <CardWidget />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
