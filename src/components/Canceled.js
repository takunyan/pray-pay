import React from "react";
import logo from "../image/fail.png";
import { Route } from "react-router-dom";

export default function Canceled() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>Sorry Your Payment Failed</div>
      <div>
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
