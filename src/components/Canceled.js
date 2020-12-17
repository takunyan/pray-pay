import React from "react";
import logo from "../image/fail.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function Canceled() {
  const classes = useStyles();
  
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>お手数ですがやり直してください</div>
      <div>
        <Route
          render={({ history }) => (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.margin}
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
