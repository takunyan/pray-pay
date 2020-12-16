const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.key);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(request);
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.test = functions.https.onCall((data, context) => {
  return "hello world" + data.text;
});
