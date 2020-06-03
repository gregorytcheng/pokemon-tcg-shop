import React, { useEffect, useState } from "react";
import { Card, Image, Dimmer, Loader, Container } from "semantic-ui-react";
import { firestore } from "../../utils/FirebaseUtils";
import Price from "../Price";
import { useHistory } from "react-router-dom";

const ShopPage = () => {
  const [cards, setCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    firestore
      .collection("cards")
      .get()
      .then((cards) => {
        var newCards = [];
        cards.forEach((card) => {
          newCards.push({ ...card.data(), id: card.id });
        });

        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Card.Group doubling itemsPerRow={3} stackable>
        {cards.length === 0 ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              onClick={() => history.push(`/shop/${card.id}`)}
            >
              <Image src={card.avatar} size="small" centered />
              <Card.Content>
                <Card.Header>{card.header}</Card.Header>
                <Card.Description>{card.name}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Price price={card.price} />
              </Card.Content>
            </Card>
          ))
        )}
      </Card.Group>
    </Container>
  );
};

export default ShopPage;
