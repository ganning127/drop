import { Box, Flex, Text, Img } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { motion, MotionConfig } from "framer-motion";

export const NavBar = ({ bg }) => (
  <Box bg={bg ? bg : "white"} pt="1" position="sticky" top="0" zIndex="100">
    <Box as="header" height="16" position="relative" color="gray.700">
      <Box
        height="100%"
        // mx="auto"
        px={{
          base: "8",
          md: "8",
        }}
        pe={{
          base: "8",
          md: "8",
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box d="flex" alignItems="center" as="a" href="/">
            <Img src="/logo.png" h="9" display="inline" mr="3" />
            <Text
              as="h1"
              fontSize="2xl"
              fontWeight="extrabold"
              maxW="48rem"
              display="inline"
              color="green.400"
            >
              Drop
              <Text as="span" color="gray.700">
                .co
              </Text>
            </Text>
          </Box>

          <NavContent.Desktop
            display={{
              base: "none",
              md: "flex",
            }}
          />
          <NavContent.Mobile
            display={{
              base: "flex",
              md: "none",
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);
