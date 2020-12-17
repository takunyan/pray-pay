import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import logo1 from "../image/worship.png";
import logo2 from "../image/5yencoin.png";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
//firebase
import firebase from "../firebase";
import "firebase/functions";
//stripe
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const handleClick = async () => {
    // Get Stripe.js instance
    const stripePromise = loadStripe(
      "pk_test_51HyW53Hh1P19FUEP8rVhQxrtrr7hJ7qmkhdJTXfO1oC6sMRRlPK0HuvIV2RIxGZTGEGmKOeFgpQXSHnMTkKX0zT900rRAlWaTb"
    );
    const stripe = await stripePromise;
    const getCheckoutSessionFunc = firebase
      .functions()
      .httpsCallable("getCheckoutSession");
    const result = await getCheckoutSessionFunc({ quantity: selectedQuantity });
    // When the customer clicks on the button, redirect them to Checkout.
    await stripe.redirectToCheckout({
      sessionId: result.data.id,
    });
  };

  const [selectedQuantity, updateSelectedQuantity] = useState();
  const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 1000];

  function ourText() {
    let output = !isNaN(selectedQuantity)
      ? `${selectedQuantity * 5}円 お賽銭を投げる`
      : "枚数を選んで下さい";
    return output;
  }
  return (
    <div className="SpaceMain">
      <img src={logo1} className="CheckoutImage" alt="logo" />

      <div className="Space">
        <img src={logo2} className="yen" alt="logo" />
        <NativeSelect
          id="select"
          className="select"
          onChange={(e) => updateSelectedQuantity(e.target.value)}
          onBlur={(e) => updateSelectedQuantity(e.target.value)}
        >
          <option>枚数</option>
          {quantityArray.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </NativeSelect>
      </div>
      <div className="select-wrapper">
        <Button
          className="button"
          type="button"
          onClick={() => {
            handleClick();
            console.log("test", selectedQuantity);
          }}
        >
          {ourText()}
        </Button>
      </div>
      <div className="Space">
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
