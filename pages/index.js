import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Landing } from "../components/Once/Landing";
import { InBox } from "../components/InBox";
import { NavBar } from "../components/NavBar";
import { Container, Heading, Text } from "@chakra-ui/react";
import { TwoColCards } from "../components/TwoCol/TwoColCards";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import InBoxData from "../data/inBox.json";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Drop</title>
      </Head>
      <NavBar />
      <Landing />

      <Container maxW="container.xl">
        <TwoColCards
          title1="Our Mission"
          desc1="We seek to work with local governments and the community to ensure that people who need resources the most are able to access it. By providing mothers with newborn children with free resources, we hope to reduce both poverty and increase quality of life."
          title2="Our Product"
          desc2="Each child drop will come with many child-care products including clothing, hygiene, and feeding supplies. Additionally, each child drop will also serve as a crib and comes with a mattress. This child drop box will be made of lightweight, yet high-quality cardboard to allow durability but also transportability."
          title3="Who Are We?"
          desc3="Drop is a company that aims to bridge the gap for homeless accessibility. Following establishment, our company seeks to ensure that for every Drop product purchased, our company will match the purchase with a donated box to be distributed to homeless facilities and new mothers below the poverty line"
        />

        <MedSep line={true} />

        <InBox
          desc="For every Drop product purchased, our company will match the purchase with a donated box to be distributed to homeless facilities and new mothers below the poverty line. Here are the items in each Child Drop."
          list={InBoxData}
        />

        <MedSep line={false} />
      </Container>
    </>
  );
}
