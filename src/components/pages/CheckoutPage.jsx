import React, { useContext } from "react";
import { Container, Grid, List, Header, Image } from "semantic-ui-react";
import CartContext from "../../contexts/CartContext";
import Price from "../Price";

const CheckoutPage = () => {
  const cart = useContext(CartContext);

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Card</Header>
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
                  <Header>{cartItem.name}</Header>
                </List.Item>
                <List.Item>
                  <Image src={cartItem.avatar} size="tiny" />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Price price={cartItem.price * cartItem.quantity} />
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
