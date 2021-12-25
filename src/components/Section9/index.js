import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section9({

  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ItemText>
          <h1>
            MEAT THE HAPEBEAST TEAM
          </h1>
        </ItemText>
        <ImageArea>
          <ImageSection>
            <Image src="/images/14.webp" />
            <h2>
              DIGIMENTAL
            </h2>
            <h3>
              PRIMAL HAPE
            </h3>
          </ImageSection>
        </ImageArea>
        <Paragraph>
          <p>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</p>
        </Paragraph>
        <Buttonn>

        </Buttonn>
      </Fade>
    </Wrap>
  );
}

export default Section9;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
`;

const ItemText = styled.div`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
      font-size: 100px;
      padding: 0;
      max-width: 800px;
      line-height: 0.8;
  }
`;

const ImageSection = styled.div`
  width: 100vw;
  h2 {
    margin : 0px;
  }
  h3 {
      font-size: 18px;
      margin: 0px;
      padding: 0;
  }


`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const ImageArea = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  margin-top : 60px;
`;
const Paragraph = styled.div`
max-width: 400px;
`;
const Buttonn = styled.div`
  
`;