import React from "react";
import logo1 from "../image/manworship.png";
import logo2 from "../image/mansuccess.png";
import { Route } from "react-router-dom";

export default function About() {
  return (
    <div>
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
      <img src={logo1} className="App-logo" alt="logo" />
      <img src={logo2} className="App-logo" alt="logo" />
      <div>
        <Route
          render={({ history }) => (
            <button
              className="aboutbutton"
              type="button"
              onClick={() => {
                history.push("/");
              }}
            >
              戻る
            </button>
          )}
        />
      </div>
    </div>
  );
}
