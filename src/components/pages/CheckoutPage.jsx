import React, { useContext } from "react";
import { Container, Grid, List, Header, Image } from "semantic-ui-react";
import CartContext from "../../contexts/CartContext";
import Price from "../Price";
import StripePaymentButton from "../StripePaymentButton";
import QuantitySlider from "../QuantitySlider";

const CheckoutPage = () => {
  const cart = useContext(CartContext);

  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Card</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Quantity</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Price</Header>
          </Grid.Column>
        </Grid.Row>
        {cart.cartItems.map((cartItem) => (
          <Grid.Row key={cartItem.id}>
            <Grid.Column>
              <List>
                <List.Item>
                  {cartItem.name} ({<Price price={cartItem.price} />})
                </List.Item>
                <List.Item>
                  <Image src={cartItem.avatar} size="tiny" />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <QuantitySlider cartItem={cartItem} />
            </Grid.Column>
            <Grid.Column>
              <Price price={cartItem.price * cartItem.quantity} />
            </Grid.Column>
          </Grid.Row>
        ))}
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column>
            <StripePaymentButton price={cart.cartTotal} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
