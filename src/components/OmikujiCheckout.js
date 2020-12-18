import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import logo from "../image/omikuji.png";

import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//firebase
import firebase from "../firebase";
import "firebase/functions";
//stripe
import { loadStripe } from "@stripe/stripe-js";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Checkout() {
  const classes = useStyles();

  const handleClickOmikuji = async () => {
    // Get Stripe.js instance
    const stripePromise = loadStripe(
      "pk_test_51HyW53Hh1P19FUEP8rVhQxrtrr7hJ7qmkhdJTXfO1oC6sMRRlPK0HuvIV2RIxGZTGEGmKOeFgpQXSHnMTkKX0zT900rRAlWaTb"
    );
    const stripe = await stripePromise;
    const getCheckoutSessionFunc = firebase
      .functions()
      .httpsCallable("getTestCheckoutOmikuji");
    const result = await getCheckoutSessionFunc();
    // When the customer clicks on the button, redirect them to Checkout.
    await stripe.redirectToCheckout({
      sessionId: result.data.id,
    });
  };

  return (
    <div className="SpaceMain">
      <img src={logo} className="CheckoutImage" alt="logo" />

      <div className="select-wrapper">
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          className={classes.margin}
          onClick={() => {
            handleClickOmikuji();
          }}
        >
          200円でおみくじを引く
        </Button>
      </div>
      <div className="Space">
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
    </div>
  );
}
