import React from "react";
import logo from "../image/success.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Success() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>THE GOD SMILES UPON YOU</div>
      <div>
        <Route
          render={({ history }) => (
            <Button
              className="aboutbutton"
              type="button"
              onClick={() => {
                history.push("/");
              }}
            >
              戻る
            </Button>
          )}
        />
      </div>
    </div>
  );
}
