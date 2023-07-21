import React from "react";
import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";

const avatarSrc =
  "https://media.licdn.com/dms/image/C4D03AQGszwIpiYMVIA/profile-displayphoto-shrink_800_800/0/1651557517365?e=2147483647&v=beta&t=oIw4johTsZUyGG5i1JJJVt1c5QK-8mgHYoBdXWV4KM0";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
