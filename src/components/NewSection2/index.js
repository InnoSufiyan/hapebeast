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
      <Fade bottom>
        <ItemText>
          <TextImage>
            <img src="/images/new/text-v1.svg" />
          </TextImage>
          <SideImage>
            <img src="/images/new/man-v1.png" />
          </SideImage>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default NewSection2;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 100%;
  background-position: 50% 11%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-image: url("/images/new/bg-banner-v12.jpg");
  position: relative;
`;

const ItemText = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;

  
`;
const TextImage = styled.div`
  
`;



const SideImage = styled.div`
`
