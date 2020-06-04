import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Button, Icon, Popup, Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import QuantitySlider from "./QuantitySlider";

const CartPopupButton = () => {
  const history = useHistory();
  const cart = useContext(CartContext);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <Popup
      wide="very"
      on="click"
      open={popupOpen}
      onOpen={openPopup}
      onClose={closePopup}
      trigger={
        <Button style={{ marginLeft: "1em" }}>
          <Icon size="large" name="cart" />
          {cart.cartItemsCount}
        </Button>
      }
      content={
        cart.cartItemsCount === 0 ? (
          "Your cart is empty."
        ) : (
          <>
            <Grid columns={2}>
              {cart.cartItems.map((cartItem) => (
                <Grid.Row key={cartItem.id}>
                  <Grid.Column width={8}>
                    {cartItem.name}
                    {/* <Image src={cartItem.avatar} size="mini" centered /> */}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <QuantitySlider
                      cartItem={cartItem}
                      style={{ paddingRight: "2em" }}
                    />
                  </Grid.Column>
                </Grid.Row>
              ))}
            </Grid>
            <Button
              primary
              onClick={() => {
                history.push("/checkout");
                closePopup();
              }}
            >
              Continue to checkout
            </Button>
          </>
        )
      }
      position="bottom right"
    />
  );
};

export default CartPopupButton;
