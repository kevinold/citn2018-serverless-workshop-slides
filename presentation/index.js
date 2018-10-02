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
  Fill,
  Appear,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import WSBOne from "../assets/wsb-screenshot-1.png";
import WSBTwo from "../assets/wsb-screenshot-2.png";
import LifeWayIT from "../assets/lifewayit.png";
import FaithLeadsTech from "../assets/faithleadstech.png";

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

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Serverless?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Function as a Service (FaaS)
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Principles of a Serverless Architecture
          </Heading>
          <Fill>
          <List style={{ "list-style-type": "none" }}>
            <Appear>
            <ListItem> Use a compute service to execute code on demand </ListItem>
            </Appear>
            <Appear>
            <ListItem> Write single-purpose stateless functions </ListItem>
            </Appear>
            <Appear>
            <ListItem> Design push-based, event-driven pipelines </ListItem>
            </Appear>
            <Appear>
            <ListItem> Create thicker, more powerful front ends </ListItem>
            </Appear>
            <Appear>
            <ListItem> Embrace third party services </ListItem>
            </Appear>
          </List>
          </Fill>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Demo / Lab(s)
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Demo - Hello World
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Demo - Simple HTTP
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Demo - Crontab (Daily Menu)
          </Heading>
          <Link href="https://www.homecafebg.com/2018/09/9-21-9-22-weekend-specials/" target="_blank">Home Cafe Menu</Link>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Demo - GraphQL via AWS AppSync
          </Heading>
          <Link href="https://console.aws.amazon.com/appsync/home" target="_blank">AWS AppSync</Link>
          <Link href="https://aws-amplify.github.io/" target="_blank">AWS Amplify</Link>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={FaithLeadsTech} height="600px"/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Thanks!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            @kevinold
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            kevin.old@lifeway.com
          </Text>
        </Slide>
      </Deck>
    );
  }
}
