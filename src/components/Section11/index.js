import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section11({
  textColor,
  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>

        <TextArea textColor= {textColor}>
          <Headline>
            Art x Collectibles
          </Headline>
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
        <ImageArea>
          <Imagefirst>
            <img src="/images/22.jpg" />
          </Imagefirst>
          <ImageSecond>
            <img src="/images/23.jpeg" />
          </ImageSecond>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section11;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
  gap: 35px;
  padding: 40px 0;

  @media (max-width : 976px) {
    flex-direction: column;
    }
  
`;

const TextArea = styled.div`
  color: ${(props)=> props.textColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Headline = styled.h1`
`

const Paragraph = styled.p`
  text-align: justify;
  width: 30vw;

  @media (max-width : 976px) {
    width: 80vw;
    }

`

const ImageArea = styled.div`
  margin-right: 100px;

  @media (max-width : 976px) {
    margin-right: 180px;
    }
  @media (max-width : 700px) {
    margin: 0 auto;
    }
`

const Imagefirst = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  top: 200px;
  left: 200px;

  img {
    width: 100%;
  }

  @media (max-width : 700px) {
    top: 0;
  left: 0;
  width: 300px;
  height: 300px;
    }
`

const ImageSecond = styled.div`
width: 450px;
  height: 450px;
  position: relative;
  top: -150px;

  img {
    width: 100%;
  }

  @media (max-width : 700px) {
    top: 0;
  left: 0;
  width: 300px;
  height: 300px;
    }
`

