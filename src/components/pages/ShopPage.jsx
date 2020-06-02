import React from "react";
import {
  Container,
  Button,
  Card,
  Divider,
  Image,
  Placeholder,
  Icon,
} from "semantic-ui-react";

const cards = [
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/XY7/XY7_EN_39.png",
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/EX15/EX15_EN_21.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "a",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "b",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "c",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "d",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "e",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "f",
    description: "Primary Contact",
  },
  {
    avatar:
      "https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS1/HGSS1_EN_9.png",
    date: "Joined in 2013",
    header: "g",
    description: "Primary Contact",
  },
];

const ShopPage = () => {
  return (
    <Card.Group doubling itemsPerRow={3} stackable>
      {cards.map((card) => (
        <Card key={card.header}>
          <Image src={card.avatar} size="small" centered />
          <Card.Content>
            <Card.Header>{card.header}</Card.Header>
            <Card.Meta>{card.date}</Card.Meta>
            <Card.Description>{card.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="dollar" />
              22.20
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ShopPage;
