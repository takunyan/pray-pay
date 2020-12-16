import React from "react";
import { Route } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div>
        <Route
          render={({ history }) => (
            <button
              className="aboutbutton"
              type="button"
              onClick={() => {
                history.push("/Checkout");
              }}
            >
              参拝
            </button>
          )}
        />
      </div>

      <div>
        <Route
          render={({ history }) => (
            <button
              className="button"
              type="button"
              onClick={() => {
                history.push("/About");
              }}
            >
              About
            </button>
          )}
        />
      </div>
    </div>
  );
}
