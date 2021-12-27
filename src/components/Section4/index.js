import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section4({
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
                    <p>{paragraph}</p>
                    <p>{paragraph2}</p>
                </ItemText>
            </Fade>
        </Wrap>
    );
}

export default Section4;

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

  
  p {
    font-size: 20px;
      max-width: 750px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 20px;
        margin: 0 20px;
      }
  }
`;


const Buttons = styled.div``;