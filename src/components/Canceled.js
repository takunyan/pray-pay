import React from "react";
import logo from "../image/fail.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function Canceled() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>Sorry Your Payment Failed</div>
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
