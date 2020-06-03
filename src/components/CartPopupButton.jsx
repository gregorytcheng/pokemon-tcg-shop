import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Button, Icon, Popup, Grid, Image } from "semantic-ui-react";

const CartPopupButton = () => {
  const cart = useContext(CartContext);

  return (
    <Popup
      trigger={
        <Button style={{ marginLeft: "1em" }}>
          <Icon size="large" name="cart" />
          {cart.cartItemsCount}
        </Button>
      }
      on="click"
      content={
        cart.cartItemsCount === 0 ? (
          "Your cart is empty."
        ) : (
          <>
            <Grid columns={2}>
              {cart.cartItems.map((cartItem) => (
                <Grid.Row key={cartItem.id}>
                  <Grid.Column width={8}>
                    {`${cartItem.name} x ${cartItem.quantity}`}
                    <Image src={cartItem.avatar} size="mini" />
                  </Grid.Column>
                  <Grid.Column width={8}>2</Grid.Column>
                </Grid.Row>
              ))}
            </Grid>
            <Button primary>Continue to checkout</Button>
          </>
        )
      }
      position="bottom right"
    />
  );
};

export default CartPopupButton;
