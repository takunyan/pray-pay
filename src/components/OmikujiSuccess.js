import React from "react";
import logo from "../image/omikuji.gif";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import sound from "../image/syakasyaka.mp3";

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

  const messages = [
    "おめでとう!最高の1年になります!!🥳",
    "まあまあな1年になるでしょう🤔",
    "今年、1回は良いことがありそう",
    "残念。。毎日が地獄です😭",
    "平凡な1年になるでしょう",
    "日頃の行いが報われる1年になります!!",
  ];

  const outcome = Math.floor(messages.length * Math.random());

  const omikuji = messages[outcome];

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          {/* <iframe src="https://raw.githubusercontent.com/anars/blank-audio/master/2-seconds-of-silence.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
          <audio autoplay>
            <source src={sound} type="audio/mpeg"></source>
          </audio> */}
        </Grid>
        <Grid item xs={12}>
          <img className="omikujiResult" src={logo} alt = " " ></img>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">{omikuji}</Typography>
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
