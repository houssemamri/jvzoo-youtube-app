import { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

import React from "react";

function Paypal() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AVMxYbrh4Im_nD6tb6RpzM9moezSeGQlR2FUq9LkOvuPPl-Dct5FeJKXCnirysKyn9mENqHeJmwGUH1y`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  return (
    <div>
      {scriptLoaded ? (
        <PayPalButton
          amount="37"
          onSuccess={(details, data) => {
            //save the transaction
            console.log(details);
          }}
        />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Paypal;
