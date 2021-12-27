import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section2({
    title,
    description,
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
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>{paragraph}</p>
                    <p>{paragraph2}</p>
                </ItemText>
            </Fade>
        </Wrap>
    );
}

export default Section2;

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
      font-size: 120px;
      margin: 0 0 20px 0;
      padding: 0;
      @media (max-width: 800px) {
        font-size: 100px;
        margin: 0 20px 20px 20px;
      }
      @media (max-width: 500px) {
        font-size: 80px;
        margin: 0 20px 20px 20px;
      }
  }
  h3 {
      font-size: 25px;
      margin: 0 0 20px 0;
      padding: 0;
      @media (max-width: 800px) {
        font-size: 20px;
        margin: 0 20px 20px 20px;
      }
      @media (max-width: 500px) {
        font-size: 17px;
        margin: 0 20px 20px 20px;
      }
  }
  p {
    font-size: 20px;
      max-width: 700px;
      text-align: center;
      @media (max-width: 800px) {
        font-size: 17px;
        margin: 20px 20px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
        margin: 20px 20px;
      }
  }
`;


const Buttons = styled.div``;