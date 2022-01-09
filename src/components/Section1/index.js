import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section1({
  title,
  description,
  backgroundImg,
  color,
  imagey,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <p>{paragraph}</p>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default Section1;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) =>
    props.checkImage
      ? `url("/images/${props.bgImage}")`
      : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
`;

const ItemText = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 120px;
    margin: 0 20px 20px 20px;
    padding: 0;
    @media (max-width: 780px) {
      font-size: 80px;
    }
    @media (max-width: 520px) {
      font-size: 60px;
    }
    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
  h3 {
    font-size: 25px;
    margin: 0 0 20px 0;
    padding: 0 20px;
    @media (max-width: 500px) {
      font-size: 17px;
      margin: 0 20px 20px 20px;
    }
    @media (max-width: 340px) {
      font-size: 13px;
    }
  }
  p {
    font-size: 20px;
    max-width: 500px;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 15px;
      margin: 0 20px;
    }
    @media (max-width: 340px) {
      font-size: 12px;
      margin: 0 20px;
    }
  }
`;

const Buttons = styled.div``;
