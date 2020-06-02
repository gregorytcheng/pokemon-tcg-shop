import React from "react";
import { Icon } from "semantic-ui-react";
import { financial } from "../utils/PriceUtils";

const Price = ({ price }) => (
  <>
    <Icon name="dollar" />
    {financial(price)}
  </>
);

export default Price;
