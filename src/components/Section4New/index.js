import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section4New({
  title,
  description,
  backgroundImg,
  color1,
  color2,
  color3,
  imagey,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory1={color1} colory2={color2} colory3={color3}>
      <Fade bottom>
        <ItemText>
          <h1>dada</h1>
          <h3>{description}</h3>
          <p>{paragraph}</p>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default Section4New;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image : radial-gradient(#937a31, #020204); */
  /* background-image : radial-gradient(farthest-corner at 90% 40px,
      #937a31 0%, #020204 70%); */
      background : url('/images/4.png') center center / contain, radial-gradient(ellipse farthest-corner at 10% 90%,
        #552059 0%, #020204 70%);
  background-blend-mode: overlay;
`;

// 6b571c
// 552059

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
