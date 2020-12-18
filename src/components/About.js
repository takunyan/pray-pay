import React from "react";
import logo1 from "../image/manworship.png";
import logo2 from "../image/mansuccess.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
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

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">
              This application enables patrons of a shrine to experience a
              virtual visit to their local shrine and provide economic support
              in the process.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <img src={logo1} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={3}>
          <img src={logo2} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">
              In Japanese, saisen (賽銭) is money offered to the gods or
              bodhisattvas. Commonly this money is put in a saisen box (賽銭箱,
              saisen-bako), a common item at Shinto shrines and Buddhist temples
              in Japan. Used to collect offerings, a saisen box is typically a
              wooden coin box, with a grate for the top cover. This design
              allows coins to be tossed in, while still preventing the money
              from being retrieved easily. Some have grates made of round bars,
              or have borders that slope downward, allowing the money to slide
              into the box easily.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div>
            <Route
              render={({ history }) => (
                <Button
                  variant="outlined"
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
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}
