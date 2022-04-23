import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Landing } from "../components/Once/Landing";
import { TitleWithList } from "../components/TwoCol/TitleWithList";
import { NavBar } from "../components/NavBar";
import { Container } from "@chakra-ui/react";
import { TwoColCards } from "../components/TwoCol/TwoColCards";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Drop</title>
      </Head>
      <NavBar />
      <Landing />

      <Container maxW="container.xl">
        <TitleWithList
          list={[
            "Lorem ipsum is very cool and I'm going to nut to this tonight",
            "bal badfaksl askfjalsdkj falskdf lasdf",
            "lol  asfdsalk aasfd asdf sasdf ",
            "Dfasf asdf' adsf sadf asfasd asdf sdf ",
          ]}
        >
          What's in the box?
        </TitleWithList>
      </Container>
    </>
  );
}
