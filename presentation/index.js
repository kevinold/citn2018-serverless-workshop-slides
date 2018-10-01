// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import WSBOne from "../assets/wsb-screenshot-1.png";
import WSBTwo from "../assets/wsb-screenshot-2.png";
import LifeWayIT from "../assets/lifewayit.png";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Building Simple, Scalable, Serverless Applications
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://github.com/kevinold/citn2018-serverless-workshop-demo
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            About Me
          </Heading>
          <List>
            <ListItem> White House, TN</ListItem>
            <ListItem> Married 16 years</ListItem>
            <ListItem> 2 Boys - 7yo, 2.5yo</ListItem>
            <ListItem> Front End Architect, LifeWay</ListItem>
            <ListItem> Remote Work</ListItem>
            <ListItem> Love Craft Coffee </ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]}>
          <Image src={LifeWayIT} width="800px"/>
        </Slide>
        <Slide transition={["zoom"]} bgImage={WSBOne} />
        <Slide transition={["zoom"]} bgImage={WSBTwo} />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>app.wordsearchbible.com</Heading>
          <Heading size={6} textColor="secondary" caps>REDEMPTION CODE: DCB3JNZTAM</Heading>
          <List>
            <ListItem> 6 Bibles </ListItem>
            <ListItem> 33 Commentaries </ListItem>
            <ListItem> 7 Devotionals </ListItem>
            <ListItem> 3 Dictionaries </ListItem>
            <ListItem> 3 Handbooks </ListItem>
            <ListItem> 5 Maps, Atlases, Photos, Illustrations </ListItem>
            <ListItem> 17 Sermon Helps </ListItem>
            <ListItem> 13 Expositions </ListItem>
            <ListItem> .... 150 pieces of content </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <List>
            <ListItem> AWS Lambda / Serverless 101 </ListItem>
            <ListItem> Lab: Hello World </ListItem>
            <ListItem> Lab: Simple HTTP </ListItem>
            <ListItem> Lab: File Conversion </ListItem>
            <ListItem> Lab: REST API </ListItem>
            <ListItem> Lab: Serverless GraphQL </ListItem>
            <ListItem> Lab: Crontab </ListItem>
            <ListItem> Tips and Tricks / Questions </ListItem>
          </List>
        </Slide>



        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
