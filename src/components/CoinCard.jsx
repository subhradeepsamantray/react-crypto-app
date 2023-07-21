import React from "react";
import {
  Container,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, image, symbol, price, currencySymbol }) => (
  <Link to={`/coins/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.10)",
        },
      }}
    >
      <Image
        src={image}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      ></Image>
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;
