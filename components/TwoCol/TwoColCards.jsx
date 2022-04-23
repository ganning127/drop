import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

export const TwoColCards = ({
  title1,
  desc1,
  title2,
  desc2,
  title3,
  desc3,
}) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={20}
      mx="auto"
      textAlign="center"
      justifyContent="center"
    >
      <Box bg={"white"} shadow="md" rounded="xl" maxW="400px" p={5} mx="auto">
        <Heading fontWeight="semibold" color={"green.400"} fontSize="2xl">
          {title1}
        </Heading>
        <Text color={"gray.500"} fontSize="md" my="3">
          {desc1}
        </Text>
      </Box>
      <Box bg={"white"} shadow="md" rounded="xl" maxW="400px" p={5} mx="auto">
        <Heading fontWeight="semibold" color={"green.400"} fontSize="2xl">
          {title2}
        </Heading>
        <Text color={"gray.500"} fontSize="md" my="3">
          {desc2}
        </Text>
      </Box>
      <Box bg={"white"} shadow="md" rounded="xl" maxW="400px" p={5} mx="auto">
        <Heading fontWeight="semibold" color={"green.400"} fontSize="2xl">
          {title3}
        </Heading>
        <Text color={"gray.500"} fontSize="md" my="3">
          {desc3}
        </Text>
      </Box>
    </SimpleGrid>
  );
};
