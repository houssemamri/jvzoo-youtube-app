import React from "react";
import StripeContainer from "../../components/paymentStripe/StripeContainer.js";
import Paypal from "../../components/paymentStripe/paypal.js";

function Payment({ amt }) {
  return (
    <div>
      {/* <StripeContainer amount={amt} /> */}
      {/* <br /> */}
      <Paypal />
    </div>
  );
}

Payment.getInitialProps = ({ query }) => {
  let amaount = query.pay;
  return { amt: amaount };
};

export default Payment;
