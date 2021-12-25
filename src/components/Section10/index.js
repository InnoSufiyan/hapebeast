import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section10({

  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ImageSection1>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
        </ImageSection1>
        <ImageSection2>
          <ImageArea>
            <Image src="/images/15.webp" />
          </ImageArea>
        </ImageSection2>
      </Fade>
    </Wrap>
  );
}

export default Section10;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
`;

const ImageSection1 = styled.div`
width: 100vw;
  display: flex;
  justify-content: space-around;
`
const ImageSection2 = styled.div`
  display: flex;
`
const ImageArea = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 150px;
  height: 150px;
`
