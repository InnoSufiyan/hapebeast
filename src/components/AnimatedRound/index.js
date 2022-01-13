import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from 'react-reveal/Fade';

function AnimatedRound({
  textColor,
  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ImageArea>
          <Imagefirst>
            <img src="/images/23.jpeg" />
            <div></div>
          </Imagefirst>
          <AnimatedImage>
            <img src="/images/15.webp" />
          </AnimatedImage>
        </ImageArea>
        <TextArea textColor={textColor}>
          <Headline>
            WHAT IS
          </Headline>
          <Headline1>
            BORED BUNNY?
          </Headline1>
          <Paragraph>
            In 1989, the original Charging Bull sculpture was created by Italian artist Arturo Di Modica and placed on Wall Street. It was meant to symbolize the aggressive financial optimism and prosperity of the stock market.
          </Paragraph>
          <Paragraph>
            After the success of the original, its artist was commissioned to create multiple variations of the bull. Each sold to private collectors all over the world.
          </Paragraph>
          <Paragraph>
            Financial optimism and aggressive growth has moved on from Wall Street… and into the Metaverse.
          </Paragraph>
        </TextArea>
      </Fade>
    </Wrap>
  );
}

export default AnimatedRound;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/bg_2 copy.jpg");
  gap: 200px;
  padding: 40px 0;

  @media (max-width : 976px) {
    flex-direction: column;
    }
  
`;

const TextArea = styled.div`
  color: ${(props) => props.textColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`



const Headline = styled.h1`
  color: transparent;
  -webkit-text-stroke : 1px white;
  margin: 0;
  padding: 0;
  
`
const Headline1 = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
`

const Paragraph = styled.p`
  text-align: justify;
  width: 30vw;
  color: white;

  @media (max-width : 976px) {
    width: 80vw;
    }

`

const ImageArea = styled.div`

`
const AnimatedImage = styled.div`

  width: 100px;
  height: 100px;
  

  img {
    width: 100%;
    animation: spin 2s ease-in infinite;
  }

`

const Imagefirst = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  

  img {
    width: 100%;  
    border-radius : 50%;
  }

  div {
    width: 550px;
    height: 550px;
    border : 3px solid white;
    border-radius : 50%;
    position: absolute;
    top: -50px;
    left: -50px;
  }
`

var spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

