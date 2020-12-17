import React from "react";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function Main() {
  return (
    <div className="SpaceMain">
      <div className="SpaceMain">
        <Route
          render={({ history }) => (
            <Button
              className="aboutbutton"
              type="button"
              onClick={() => {
                history.push("/Checkout");
              }}
            >
              参拝
            </Button>
          )}
        />
      </div>

      <div>
        <Route
          render={({ history }) => (
            <Button
              className="button"
              type="button"
              onClick={() => {
                history.push("/About");
              }}
            >
              About
            </Button>
          )}
        />
      </div>
    </div>
  );
}
