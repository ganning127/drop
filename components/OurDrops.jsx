import { SimpleGrid, Box, Img, Text, chakra } from "@chakra-ui/react";

export const OurDrops = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={10}
      mx="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Text>
          Drop provides child-care and infant necessities for expecting and new
          mothers. We take a two-pronged approach to solving a community need.
        </Text>

        <Text mt={2}>
          Drop provides two box specifications. The first is a premium childcare
          kit, called the{" "}
          <chakra.span bg="green.100" px={1} rounded="md">
            child drop
          </chakra.span>
          , is delivered to paying customers. The second is a{" "}
          <chakra.span bg="green.100" px={1} rounded="md">
            free box
          </chakra.span>{" "}
          that will be supplied to homeless individuals in need. We plan on
          financing the second box using the profits from the paid box,
          supplemented by additional monetary aid from the government. Each
          child drop will come with many child-care products including clothing,
          hygiene, and feeding supplies. Additionally, each child drop will also
          serve as a crib and comes with a mattress. This child drop box will be
          made of lightweight, yet high-quality cardboard to allow durability
          but also transportability.
        </Text>
      </Box>
      <Box>
        <Img src="box.png" maxH="300px" mx="auto" />
      </Box>
    </SimpleGrid>
  );
};
