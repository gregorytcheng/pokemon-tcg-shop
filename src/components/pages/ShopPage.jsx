import React, { useEffect, useState } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { firestore } from "../../utils/FirebaseUtils";
import { financial } from "../../utils/PriceUtils";
import moment from "moment";

const ShopPage = () => {
  const [cards, setCards] = useState([]);

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
    <Card.Group doubling itemsPerRow={3} stackable>
      {cards &&
        cards.map((card) => (
          <Card key={card.id}>
            <Image src={card.avatar} size="small" centered />
            <Card.Content>
              <Card.Header>{card.header}</Card.Header>
              <Card.Meta>
                Added {moment.unix(card.created.seconds).fromNow()}
              </Card.Meta>
              <Card.Description>{card.name}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="dollar" />
              {financial(card.price)}
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default ShopPage;
