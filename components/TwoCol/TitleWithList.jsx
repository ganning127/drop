import { Box, SimpleGrid, Heading, List, Text } from "@chakra-ui/react";

export const TitleWithList = ({ list, children }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 16 }}>
      <Box>
        <Heading color="gray.700">{children}</Heading>
        <Text></Text>
      </Box>
      <Box></Box>
    </SimpleGrid>
  );
};
