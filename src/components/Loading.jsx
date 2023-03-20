import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="spinner-grow circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
