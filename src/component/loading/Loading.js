import React from "react";
import "./loading.scss";

function Loading() {
  return (
    <div className="cssload">
      <h1 className="cssload__robot" style={{ color: "white" }}>
        🤖
      </h1>
      <div className="cssload__container">
        <div className="cssload__crazy__arrow"></div>
        <h3>Laoding ......</h3>
      </div>
    </div>
  );
}

export default React.memo(Loading);
