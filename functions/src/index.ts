// import { database } from "firebase";

const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.key);

exports.getCheckoutSession = functions.https.onCall(async (data, context) => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      { price: "price_1HynyLHh1P19FUEPdhxDrEvC", quantity: data.quantity },
    ],
    mode: "payment",
    success_url: "https://pray-pay.web.app/Success",
    cancel_url: "https://pray-pay.web.app/Canceled",
  });
});

exports.getCheckoutOmikuji = functions.https.onCall(async (data, context) => {
    return await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        { price: "price_1HzIhWHh1P19FUEPwn7orbkc", quantity: 1},
      ],
      mode: "payment",
      success_url: "https://pray-pay.web.app/OmikujiSuccess",
      cancel_url: "https://pray-pay.web.app/OmikujiCanceled",
    });
  }
);


exports.getTestCheckoutSession = functions.https.onCall(
  async (data, context) => {
    return await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        { price: "price_1HynyLHh1P19FUEPdhxDrEvC", quantity: data.quantity },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/Success",
      cancel_url: "http://localhost:3000/Canceled",
    });
  }
);


exports.getTestCheckoutOmikuji = functions.https.onCall(async (data, context) => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      { price: "price_1HzIhWHh1P19FUEPwn7orbkc", quantity: 1},
    ],
    mode: "payment",
    success_url: "http://localhost:3000/OmikujiSuccess",
    cancel_url: "http://localhost:3000/OmikujiCanceled",
  });
}
);