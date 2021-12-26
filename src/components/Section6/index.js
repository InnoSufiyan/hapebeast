import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section6({

  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ItemText>
          <h3>
            ROADMAP TEASER
          </h3>
        </ItemText>
        <ImageArea>
          <ImageSection>
            <Image src="/images/11.webp" />
            <h2>
              PHASE 1:
            </h2>
            <h2>
              IN THE BEGINNING
            </h2>
            <p>
              A new dimension
            </p>
            <p>
              First drop
            </p>
            <p>
              Music to HAPE to
            </p>
          </ImageSection>
          <ImageSection>
            <Image src="/images/11.webp" />
            <h2>
              PHASE 1:
            </h2>
            <h2>
              IN THE BEGINNING
            </h2>
            <p>
              A new dimension
            </p>
            <p>
              First drop
            </p>
            <p>
              Music to HAPE to
            </p>
          </ImageSection>
          <ImageSection>
            <Image src="/images/11.webp" />
            <h2>
              PHASE 1:
            </h2>
            <h2>
              IN THE BEGINNING
            </h2>
            <p>
              A new dimension
            </p>
            <p>
              First drop
            </p>
            <p>
              Music to HAPE to
            </p>
          </ImageSection>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section6;

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
  @media (max-width: 976px) {
    height: 200vh;
  }
  
`;

const ItemText = styled.div`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

 
  h3 {
      font-size: 25px;
      margin: 0 0 20px 0;
      padding: 0;

       @media (max-width: 400px) {
        font-size: 20px;
        margin : 0px;
  } }
  
`;

const ImageSection = styled.div`
  width: 100vw;

  @media (max-width: 400px) {
  }

  h2 {
    @media (max-width : 400px) {
      margin : 5px;
    }
  }
  p {
    @media (max-width : 400px) {
      margin : 5px;
    }
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 400px) {
    width: 200px;
  height: 200px;
  }
`;

const ImageArea = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  margin-top : 60px;

  @media (max-width: 976px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    margin-top : 30px;
  }
`;