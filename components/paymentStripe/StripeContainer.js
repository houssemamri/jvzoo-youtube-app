import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm.js";

const PUBLIC_KEY =
  "pk_test_51IpRJZSHWTcfSplt4sb2n43gKpYBVKF3C93DEmdIz2Oso8ECYc6cJ2BvC7LTFC5B84dlneorYQN2sTNa0HG8rLXl00lEsqddi1";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ amount }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amt={amount} />
    </Elements>
  );
}
