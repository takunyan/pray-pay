import React from "react";
import logo from "../image/success.png";
import { Route } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>THE GOD SMILES UPON YOU</div>
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
