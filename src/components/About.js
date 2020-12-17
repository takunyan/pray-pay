import React from "react";
import logo1 from "../image/manworship.png";
import logo2 from "../image/mansuccess.png";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div>
        In Japanese, saisen (賽銭) is money offered to the gods or bodhisattvas.
        Commonly this money is put in a saisen box (賽銭箱, saisen-bako), a
        common item at Shinto shrines and Buddhist temples in Japan. Used to
        collect offerings, a saisen box is typically a wooden coin box, with a
        grate for the top cover. This design allows coins to be tossed in, while
        still preventing the money from being retrieved easily. Some have grates
        made of round bars, or have borders that slope downward, allowing the
        money to slide into the box easily.
      </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div>
        This application enables patrons of a shrine to experience a virtual visit 
        to their local shrine and provide economic support in the process.
      </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img src={logo1} className="App-logo" alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img src={logo2} className="App-logo" alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}> */}
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


          {/* </Paper> */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        
      </Grid>

    
      
      
      
      
    </div>
  );
}
