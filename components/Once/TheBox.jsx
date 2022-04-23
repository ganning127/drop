import { Flex, UnorderedList, Box, Heading, ListItem, Text, Spacer } from "@chakra-ui/react";

export function TheBox() {
    return (
        <Flex direction="row" justify="center" align="center" py={10} gap={20}>
            <Box>
                <Heading 
                    fontWeight={"black"}
                    fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}>
                    What's in <br />
                    <Text as={"span"} color={"green.400"}>
                        The Box?
                    </Text>
                </Heading>
            </Box>
            <Box>
                <UnorderedList>
                    <ListItem>
                        <Text>
                            Clothes
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Etc...
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    );
}
