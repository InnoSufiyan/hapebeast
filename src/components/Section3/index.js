import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section3({
    title,
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
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>{paragraph}</p>
                    <p>{paragraph2}</p>
                </ItemText>
            </Fade>
        </Wrap>
    );
}

export default Section3;

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
      font-size: 120px;
      margin: 0 0 20px 0;
      padding: 0;
  }
  h3 {
      font-size: 25px;
      margin: 0 0 20px 0;
      padding: 0;
  }
  p {
    font-size: 20px;
      max-width: 500px;
      text-align: center;
  }
`;

const Buttons = styled.div``;