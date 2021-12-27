import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section5({
    
    backgroundImg,
    color,
    imagey,
}) {
    return (
        <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
            <Fade bottom>
                <ItemText>
                </ItemText>
            </Fade>
        </Wrap>
    );
}

export default Section5;

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

  
`;


const Buttons = styled.div``;