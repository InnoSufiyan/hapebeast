import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function NewSection1({
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
          <SideImage>
            <img src="/images/11.png" />
          </SideImage>
          <TextImage>
            <img src="/images/new/text-v3.png" />
            <ForButton>Buy on Open Sea</ForButton>
          </TextImage>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default NewSection1;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-image: url("/images/bgg.jpeg");
  position: relative;


  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    justify-content : center;
  }
`;

const ItemText = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  
`;
const TextImage = styled.div`
  width: 50%;
  margin: auto 0;


  img {
    width: 100%;
    margin: 0 0 0 -60px;
  }
`;

const ForButton = styled.div`
  background: linear-gradient(
    90deg, #60CFFF 0%, #0090BD 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  line-height: 109.6%;
  cursor: pointer;
  padding: 24px 36px;
  display: inline-block;
  position: relative;
  transition: 0.5s;


  // &:before {
  //   content : "";
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 0;
  //   height: 100%;
  //   background: linear-gradient(
  //     90deg, #0090BD 0%, #60CFFF 100%);
  //   transition: width .3s ease-in-out;
  // }
  &:after {
    content : "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 1px solid #43B1DF;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    background: linear-gradient(
      90deg, #0090BD 0%, #60CFFF 100%);
      transition: 0.5s;
  }
`;



const SideImage = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    // width: 600px;
    // height: 600px;

    img {
      width: 100%;
    }

    @media (max-width: 1100px) {
      position: unset;
      width: 400px;
      height: 400px;
    }
`
