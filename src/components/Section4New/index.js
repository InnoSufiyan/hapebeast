import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section4New({
  title,
  description,
  backgroundImg,
  color1,
  color2,
  color3,
  imagey,
  paragraph,
  paragraph2,
  textColor
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory1={color1} colory2={color2} colory3={color3}>
      <Fade bottom>
        <TextArea textColor={textColor}>
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
          <ImageThird>
            <img src="/images/25.jpg" />
          </ImageThird>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section4New;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 40px 0;
  /* background-image : radial-gradient(#937a31, #020204); */
  /* background-image : radial-gradient(farthest-corner at 90% 40px,
      #937a31 0%, #020204 70%); */
      background : url('/images/4.png') center center / contain, radial-gradient(ellipse farthest-corner at 10% 90%,
        #552059 0%, #020204 70%);
  background-blend-mode: overlay;

  @media (max-width : 976px) {
    flex-direction: column;
    }
`;

// 6b571c
// 552059

const TextArea = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left : -150px;
`

const Headline = styled.h1`
`

const Paragraph = styled.p`
  text-align: justify;
  width: 30vw;
  background: linear-gradient(to right,
    #243e55, #1b2664);
    padding: 20px 20px;
    border-radius: 10px;

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
  width: 250px;
  height: 250px;
  position: relative;
  top: 130px;
  left: 320px;

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
width: 300px;
  height: 300px;
  position: relative;
  top: -50px;

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
const ImageThird = styled.div`
width: 150px;
  height: 150px;
  position: relative;
  bottom: 150px;
  left: 320px;

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

