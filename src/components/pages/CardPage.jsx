import React, { useEffect, useState } from "react";
import { firestore } from "../../utils/FirebaseUtils";
import {
  Dimmer,
  Loader,
  Grid,
  Image,
  Header,
  Container,
  Button,
  Segment,
} from "semantic-ui-react";
import moment from "moment";
import Price from "../Price";

const CardPage = ({ match }) => {
  const [card, setCard] = useState(undefined);

  useEffect(() => {
    firestore
      .collection("cards")
      .doc(match.params.cardId)
      .get()
      .then((card) => {
        setCard(card.data());
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {card === undefined ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <Header
            as="h1"
            content={card.name}
            subheader={`Added ${moment.unix(card.created.seconds).fromNow()}`}
          />
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Container>
                  <Image src={card.avatar} size="medium" centered />
                  <Container style={{ paddingTop: "1em" }}>
                    <Price price={card.price} />
                    <Button
                      primary
                      content={"Add to Cart"}
                      size="tiny"
                      style={{ float: "right" }}
                    />
                  </Container>
                </Container>
              </Grid.Column>
              <Grid.Column width={8}>
                <Container>
                  <Grid columns={2} stackable>
                    <Grid.Column>
                      <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>Content</Segment>
                    </Grid.Column>
                  </Grid>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CardPage;
