import Head from "next/head";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={"black"}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Make a difference. <br />
            <Text as={"span"} color={"green.400"}>
              Buy a drop, give a drop.
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Drop is a company aims to bridge the gap for homeless acessiblity
            through working with local governments. We make sure that those who
            need resources most are able to access it.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as={"a"}
              href="https://gy9yf2tl3uv.typeform.com/to/VzroWIJS?typeform-source=localhost"
              target="_blank"
              colorScheme={"green"}
              bg={"green.400"}
              shadow="md"
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Request a box
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
