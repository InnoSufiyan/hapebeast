import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Accordion from '../Accordian'

function NewSection4({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap bgImage={backgroundImg} colory={color}>
      <Fade bottom>
        <Heading>
          <Text1>FREQUENTLY</Text1>
          <Text2>ASKED QUESTIONS</Text2>
        </Heading>
        <Questions>

          <List>
            <Quest>

              <Accordion title="When will Metaversity launch its collection?">
                The official launch date of Metaversity is yet to be announced. We want to make sure we give the community as much as we can before we release our beautiful 3D Metaversity Monkeys.
              </Accordion>
            </Quest>
            <Quest>

              <Accordion title="Why should I join the Metaversity?">
                Our goal is to create a loving community of side hustlers who want to break the 9-to-5 job cycle and make money online.
              </Accordion>
            </Quest>
          </List>
          <List>
            <Quest>

              <Accordion title="Why should I buy a Metaversity Monkey? ">
                Our creators have carefully designed and polished the characteristics and appearance of the new world Monkeys through finely designed 3D artwork. These monkeys will be portrayed as the most prestigious in their class in the Metaverse.
              </Accordion>
            </Quest>
            <Quest>

              <Accordion title="Where can I buy a Metaversity Monkey? ">
                You will be able to purchase our Metaversity Monkey NFT’s on opensea.io upon the release of our collection.
              </Accordion>
            </Quest>
          </List>
          <List>
            <Quest>

              <Accordion title="Where can I get the latest information about Metaversity?">
                You can learn everything about the Metaversity in our discord. We currently have several thousands of members and host a multitude of events including NFT Masterclasses, interactive games, and student help sessions. In addition we offer many opportunities to get Whitelisted. Join our discord using this link: https://discord.gg/agb7A4hdDY
              </Accordion>
            </Quest>
            <Quest>

              <Accordion title="Will it be a worthwhile investment to purchase a Metaversity Monkey? ">
                Purchasing a Metaversity Monkey provides you with a lucrative investment. These monkeys will conquer the digital jungle entirely. Each and every one of our 9,876 Monkeys has long-term utility and will help you profit in the Metaverse.
              </Accordion>
            </Quest>
          </List>
          <List>
            <Quest>

              <Accordion title="How many Metaversity Monkeys will conquer the New world?">
                9,876 Monkeys. That is the one-of-a-kind number of Metaversity Monkeys that our team has pledged to create. We ensure that the art you purchase is of high quality by prioritizing excellence. As a result, demand for Metaversity Monkeys is quickly outpacing production.
              </Accordion>
            </Quest>
          </List>
        </Questions>
        {/* <Question>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
        </Question> */}

      </Fade>
    </Wrap >
  );
}

export default NewSection4;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-color: #25252D;
`;

// #25252D

const Heading = styled.div`
  margin: 0 0 40px 0;
`;

const Text1 = styled.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke : 1px white;
  font-size: 60px;
`;
const Text2 = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 60px;

`;
const Questions = styled.div`
  width: 80vw;

`;

const Quest = styled.div` 
  width: 50%;
  margin: 10px;
  }
`;


const List = styled.div`
  display: flex;
  align-items: center;
`;