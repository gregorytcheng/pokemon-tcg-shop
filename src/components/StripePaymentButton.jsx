import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { financial } from "./../utils/PriceUtils";

const StripePaymentButton = ({ price }) => {
  const onToken = (token) => {
    // In a real-world setting, we would send this token
    // to our backend in order to create a Stripe charge.
    alert("Your test payment has been received.");
  };

  // API key for Stripe
  const publishableKey = "pk_test_vH7mYHqiHE0y8r3zVaXTQBXx00z6OCaTtQ";

  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="Gregory T. Cheng Inc."
      billingAddress
      shippingAddress
      image="https://lh3.googleusercontent.com/a-/AOh14GgZUDJbHTzAsm99A0pYQ3XGbnH5toTKWOR0Fvz16-U"
      description={`Your total is $${financial(price)}`}
      amount={price}
      panelLabel="Pay Now"
      token={onToken} // Function to call when the charge is created
      stripeKey={publishableKey}
    />
  );
};

export default StripePaymentButton;
