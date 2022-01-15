import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function NewSection2({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap bgImage={backgroundImg} colory={color}>
      <div style={{
        width: '60vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '0 auto',
      }}>

        <TextImage>
          <Fade bottom>
            <h1>ABOUT US</h1>
            <h3>The Metaverse Monkey Takeover.</h3>
            <p>
              In a world dominated by big, hairy apes, the cute little monkeys were nowhere to be seen.
              <br />
              <br />

              After countless centuries, the monkeys had decided to make a comeback to the world.
              <br />
              <br />
              Enter: The 3-D Metaversity Monkeys.
              <br />
              <br />
              These monkeys are not only fully equipped to survive in the Metaverse, but they are ready to take on any challenge they face.
              <br />
              <br />
              With their child-like faces and cute little expressions, the monkeys are ready to take on the world and prove themselves worthy of standing amongst the apes.
              <br />
              <br />
              The monkeys are perfect characters in the metaverse. They are very appealing to look at and are also quick to move and natural in their abilities. They also play and feel very much similar to an agile human being.
              <br />
              <br />
              Though the monkeys may be smaller than their ape counterparts, they are by no means any less powerful. Equipped with many characteristics and talents, these monkeys use their quick wits and trickery to their advantage.
              <br />
              <br />
              Although a king is the leader of the kingdom, it is the councilor that makes all the decisions and ensures the will of the citizenry is represented. Though apes may seem like the kings, it is the metaversity monkeys who are the councilors that stand for the people.

            </p>
          </Fade>
        </TextImage>
        <SideImage>
          <Fade right>
            <img src="/images/new/about-image.png" />
          </Fade> 
        </SideImage>
      </div>
    </Wrap >
  );
}

export default NewSection2;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: 100%;
  background-position: 50% 11%;
  background-repeat: no-repeat;
  display: flex;
  background-image: url("/images/new/bg-banner-v12.jpg");
  position: relative;
  padding: 40px 0;
`;


const TextImage = styled.div`
  color: white;
  width: 50%;


  h1 {
    font-size: 65px;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 28px;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 18px;
  }
`;



const SideImage = styled.div`
  width: 650px;
  height: 650px;

  img {
    width: 100%;
  }
`
