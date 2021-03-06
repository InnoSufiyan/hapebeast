import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section3New({
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
        <ImageArea>
          <ImageSecond>
            <img src="/images/Metaversity 5_2.png" />
          </ImageSecond>
        </ImageArea>
        <ItemText>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default Section3New;

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
      background : url('/images/4.png') center center / contain, radial-gradient(farthest-corner at 90% 40px,
      #6b571c 0%, #020204 70%);
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
    font-size: 80px;
    margin: 0 20px 20px 20px;
    padding: 0;
  }
  h3 {
    margin: 0 0 20px 0;
    padding: 20px 20px;
    border-radius: 10px;
    max-width: 600px;
    background: linear-gradient(to right,
      #ba10d5, #f265ff);
    @media (max-width: 500px) {
      font-size: 17px;
      margin: 0 20px 20px 20px;
    }
    @media (max-width: 340px) {
      font-size: 13px;
    }
  }
  
`;

const ImageArea = styled.div`
`

const ImageSecond = styled.div`
  width: 600px;
  height: 600px;

  img {
    width: 100%;
  }
`

const Buttons = styled.div``;
