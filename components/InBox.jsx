import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  chakra,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export const InBox = ({ list, desc, children }) => {
  let keys = Object.keys(list);
  console.log(keys);
  return (
    <>
      <Heading color="gray.700" textAlign="center" fontWeight="black">
        What's in <chakra.span color="green.400">each drop</chakra.span>?
      </Heading>
      <Text textAlign="center" color="gray.700" fontWeight="semibold">
        {desc}
      </Text>
      <SimpleGrid
        mt={4}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 2, md: 5 }}
      >
        {keys.map((key, index) => {
          let lst = list[key];
          return (
            <Box key={index} bg="white" shadow="md" p={4} rounded="md">
              <Heading
                fontWeight="semibold"
                color="green.400"
                fontSize="xl"
                textAlign="center"
              >
                {key}
              </Heading>

              <List mt={2}>
                {lst.map((item, i) => {
                  return (
                    <ListItem key={i}>
                      <ListIcon as={MdCheckCircle} color="green.400" />
                      <Text d="inline" color="gray.700">
                        {item}
                      </Text>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
