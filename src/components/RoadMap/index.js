import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function RoadMap({

  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <img style={{
          position: "absolute",
          bottom: -200,
          right: "-80px",
          width: "1100px",
          height: "1100px",

        }} src="/images/Metaversity 5_2.png" />
        <ItemText>
          <h1 data-text="Road Map"> Road Map </h1>
          <p>
            Our plans moving forward into 2022.
          </p>
        </ItemText>
        <MainDiv>
          <FirstDiv>
            <img style={{
              position: "absolute",
              top: -200,
              left: -200,

            }} src="/images/sun_.png" />
            <img style={{
              position: "absolute",
              bottom: 0,
              left: -200,

            }} src="/images/img13.png" />
            <FirstSection>
              <h3>Monkeys are Born</h3>
              <p>
                The community always comes first. The goal with this project is to provide as much value as possible so that you get the greatest return on your investment. We will be announcing the drop release date once we are fully satisfied with all parts of the project. We want to make sure we provide as much as we can to the community even before our release. Once we are satisfied, the beautiful 3D Metaversity Monkeys will come to life.
              </p>
            </FirstSection>
            <SecondSection>
              <h3>Metaverse University</h3>
              <p>
                We are committed to helping the community to the fullest. We will be bringing together a community of hustlers through various media. This will be offered exclusively to The Metaverse University students where each NFT holder will gain full access to private seminars, events, courses, mentorship and even university parties!
              </p>
            </SecondSection>
          </FirstDiv>
          <SecondDiv>
            <img src="/images/roadmap 2.png" />
          </SecondDiv>
          <ThirdDiv>
            <img style={{
              position: "absolute",
              top: -450,
              right: -200,

            }} src="/images/img15 copy.png" />


            <FirstSection>
              <h3>Monkey Madness</h3>
              <p>
                Our goal is to show that an investment in a monkey will be extremely profitable for you even in the long term. As we continue to expand, we plan on hosting events across the world and doing promotions with massive celebrities. You will be part of an exclusive club (or should we say University). Metaversity Merch and Private Party: We will release our first merch collection of the Metaversity Monkeys that will be available only for the holder. To celebrate the achievement of our goals, we are going to organize a private party for our holders, where the community chooses the location.
              </p>
            </FirstSection>
            <SecondSection>
              <h3>MetaverCity</h3>
              <p>
                We have already purchased a small plot of land in Decentraland for our community. As our community continues to grow, we will expand our virtual real estate in various metaverses and build the MetaverCity. Eventually we will begin hosting events in the Metaverse.
              </p>
            </SecondSection>
          </ThirdDiv>
        </MainDiv>
      </Fade>
    </Wrap>
  );
}

export default RoadMap;

const Wrap = styled.div`
  width: 100vw;
  height: 200vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
  position: relative;
  overflow-y: hidden;
`;

const ItemText = styled.div`
  color: white;
  text-align: center;
  padding: 120px 0 0 0;
  

  h1 {
    margin: 0;
    padding: 0;
    font-size: 80px;
    display: inline;
    color: transparent;
    -webkit-text-stroke: 1px white;
    transition: 0.5s;
    position: relative;
  }

  h1:before, h1:after {
    content : attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
  }

  h1:hover:before {
    color: rgb(187,0,0);
    z-index: 1;
    -webkit-text-stroke : 1px black;
    transform: translate(10px, -10px);
  }
  h1:hover:after {
    color: rgb(119,239,255);
    z-index: 2;
    -webkit-text-stroke : 1px black;
    transform: translate(20px, -20px);
  }

  h1:hover {
    color: white;
    -webkit-text-stroke: 1px black;
    transition: 0.5s;
  }

  p {
    font-size: 20px;
    margin: 20px;
    padding: 0;
  }
`;

const MainDiv = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 30px;
`
const FirstDiv = styled.div`
  max-width: 400px;
  color: white;
  margin: 30px 0 0 0;
  position: relative;
`
const SecondDiv = styled.div`
  
`
const ThirdDiv = styled.div`
  max-width: 400px;
  color: white;
  margin: 200px 0 0 0;
  position: relative;
  `


const FirstSection = styled.div`
  
    
  `
const SecondSection = styled.div`
    margin: 250px 0 0 0;
  `
const Buttons = styled.div``;