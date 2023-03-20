import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to={"./catalogue"}>
          <button className="btn btn-dark">Ir al catálogo </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
