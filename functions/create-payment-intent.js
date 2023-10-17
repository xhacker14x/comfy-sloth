// domain/.netlify/functions/create-payment-intent

require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_AUTH_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: err.message }),
      };
    }

    return {
      statusCode: 200,
      body: "payment intent",
    };
  }
  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
