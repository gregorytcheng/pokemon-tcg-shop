import React, { useEffect, useState, useContext } from "react";
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
  Popup,
  List,
} from "semantic-ui-react";
import moment from "moment";
import Price from "../Price";
import { CartContext } from "../../contexts/CartContext";

// 750 milliseconds (0.75 seconds)
const popupTimeoutLength = 1000;

const CardPage = ({ match }) => {
  const [card, setCard] = useState(undefined);
  const [popupOpen, setPopupOpen] = useState(false);
  const { addItem } = useContext(CartContext);

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

  const handleOpen = () => {
    setPopupOpen(true);
    setTimeout(() => {
      setPopupOpen(false);
    }, popupTimeoutLength);
  };

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
                    <Grid columns={2} stackable>
                      <Grid.Column>
                        <List>
                          <List.Item>{card.description}</List.Item>
                          <List.Item>
                            <Price price={card.price} />
                          </List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column>
                        <Popup
                          trigger={
                            <Button
                              primary
                              content={"Add to Cart"}
                              size="tiny"
                              style={{ float: "right" }}
                              onClick={() =>
                                addItem({ ...card, id: match.params.cardId })
                              }
                            />
                          }
                          content={`✅ ${card.name} added to cart 🛒`}
                          on="click"
                          open={popupOpen}
                          onOpen={handleOpen}
                        />
                      </Grid.Column>
                    </Grid>
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
