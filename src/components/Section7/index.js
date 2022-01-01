import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section7({
  description,
  backgroundImg,
  color,
  imagey,
  paragraph,
  paragraph2,
  textColor
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color} textColor= {textColor}>
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
  color: ${(props)=> props.textColor};
`;

const ItemText = styled.div`
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


const Buttons = styled.div``;