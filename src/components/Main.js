import React from "react";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../image/jinja.jpg";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className="SpaceMain">
      <img src={logo} className="CheckoutImage" alt="logo" />
      <div className="SpaceMain">
        <Route
          render={({ history }) => (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.margin}
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
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.margin}
              onClick={() => {
                history.push("/OmikujiCheckout");
              }}
            >
              おみくじ
            </Button>
          )}
        />
      </div>

      <div>
        <Route
          render={({ history }) => (
            <Button
              variant="outlined"
              size="large"
              className={classes.margin}
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
