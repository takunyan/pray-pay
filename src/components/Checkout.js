import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import logo1 from "../image/worship.png";
import logo2 from "../image/5yencoin.png";

export default function Checkout() {
  const [selectedQuantity, updateSelectedQuantity] = useState();
  const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 1000];

  function ourText() {
    let output = !isNaN(selectedQuantity)
      ? `${selectedQuantity * 5}円 お賽銭を投げる`
      : "枚数を選んで下さい";
    return output;
  }
  return (
    <div className="SpaceMain">
      <img src={logo1} className="CheckoutImage" alt="logo" />

      <div className="Space">
        <img src={logo2} className="yen" alt="logo" />
        <select
          className="select"
          onChange={(e) => updateSelectedQuantity(e.target.value)}
          onBlur={(e) => updateSelectedQuantity(e.target.value)}
        >
          <option>枚数</option>
          {quantityArray.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </select>
      </div>
      <div className="select-wrapper">
        <button
          className="button"
          type="button"
          onClick={() => {
            console.log("test", selectedQuantity);
          }}
        >
          {ourText()}
        </button>
      </div>
      <div className="Space">
        <Route
          render={({ history }) => (
            <button
              className="aboutbutton"
              type="button"
              onClick={() => {
                history.push("/");
              }}
            >
              戻る
            </button>
          )}
        />
      </div>
    </div>
  );
}
