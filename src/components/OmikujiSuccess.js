import React from "react";
import logo from "../image/success.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};

export default function Success() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <img src={logo} className="OutcomeImage" alt="logo" />
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">ようこそお参りくださいました</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </div>
  );
}
