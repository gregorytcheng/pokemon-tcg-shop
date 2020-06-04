import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Dimmer,
  Loader,
  Container,
  Search,
  Header,
  Input,
} from "semantic-ui-react";
import { firestore } from "../../utils/FirebaseUtils";
import Price from "../Price";
import { useHistory } from "react-router-dom";

const ShopPage = () => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleSearchChange = (e, { value }) => {
    setSearchValue(value);
  };

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
      <Input
        value={searchValue}
        onChange={handleSearchChange}
        style={{ paddingBottom: "1em" }}
        placeholder="Search..."
      />
      <Card.Group doubling itemsPerRow={3} stackable>
        {cards.length === 0 ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : (
          cards.map(
            (card) =>
              card.name.toLowerCase().startsWith(searchValue.toLowerCase()) && (
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
              )
          )
        )}
      </Card.Group>
    </Container>
  );
};

export default ShopPage;
