import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section1New({
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
    <Wrap bgImage={backgroundImg} checkImage={imagey}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </ItemText>
        <ImageArea>
          <ImageSecond>
            <img src="/images/23.jpeg" />
          </ImageSecond>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section1New;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  background : url('/images/4.png') center center / contain, radial-gradient(farthest-corner at 40px 40px,
      #0e336a 0%, #020204 70%);
  background-blend-mode: overlay;
`;

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
