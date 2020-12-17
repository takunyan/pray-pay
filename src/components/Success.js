import React from "react";
import logo from "../image/success.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
=======
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}));
>>>>>>> ae7d2956a2eddbe6b02d0de617d8674bb72f351f

export default function Success() {
  const classes = useStyles();

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>ようこそお参りくださいました</div>
      <div>
        <Route
          render={({ history }) => (
            <Button
<<<<<<< HEAD
              className="aboutbutton"
              type="button"
=======
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.margin}
>>>>>>> ae7d2956a2eddbe6b02d0de617d8674bb72f351f
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
