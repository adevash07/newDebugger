import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <div className='cssload'>
      <h1 className='cssload__robot'>🤖</h1>
      <div class='cssload__container'>
        <div class='cssload__crazy__arrow'></div>
        <h3>Laoding ......</h3>
      </div>
    </div>
  );
}
