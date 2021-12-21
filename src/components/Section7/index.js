import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section7({
  title,
  description,
  leftBtnTxt,
  rightBtnTxt,
  backgroundImg,
  color,
  imagey,
  paragraph,
  paragraph2
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ItemText>
          <h3>{description}</h3>
          <p>{paragraph2}</p>
          <h1>{paragraph}</h1>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default Section7;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
`;

const ItemText = styled.div`
    color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
      font-size: 100px;
      margin: 0 0 20px 0;
      padding: 0;
      @media (max-width: 900px) {
        font-size: 80px;
        margin: 0 20px
      }
      @media (max-width: 660px) {
        font-size: 60px;
        margin: 0 20px
      }
      @media (max-width: 500px) {
        font-size: 40px;
        margin: 0 20px
      }
  }
  h3 {
    max-width: 850px;
      font-size: 40px;
      margin: 0 0 20px 0;
      padding: 0;
      @media (max-width: 900px) {
        font-size: 30px;
        margin: 0 20px
      }
      @media (max-width: 660px) {
        font-size: 20px;
        margin: 0 20px
      }
      @media (max-width: 500px) {
        font-size: 15px;
        margin: 0 20px
      }
  }
  p {
    font-size: 20px;
      max-width: 500px;
      text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;