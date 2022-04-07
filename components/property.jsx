import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Badge, StarIcon } from "@chakra-ui/react";
import millify from "millify";

import HouseImage from "../assets/Images/house.jpg";

const Property = ({
  property: { name, coverPhoto, rooms, baths, area, title, price },
}) => {
  return (
    <Flex
      flexWrap="wrap"
      w="420px"
      p="6"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={coverPhoto ? coverPhoto.url : HouseImage}
          width={400}
          height={260}
          alt={"house"}
        />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {rooms} rooms &bull; {baths} baths &bull; {millify(area)} sqft
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
          <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Property;
