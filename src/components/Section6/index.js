import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section6({

  backgroundImg,
  color,
  imagey,
  textColor
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color} textColor={textColor}>
      <Fade bottom>
        <ItemText>
          <h3>
            9876 University Themed Monkeys.
          </h3>
        </ItemText>
        <ImageArea>
          <ImageSection>
            <Image src="/images/Metaversity 2.png" />
            {/* <h2>
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
            </p> */}
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 4.png" />
            {/* <h2>
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
            </p> */}
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 5.png" />
            {/* <h2>
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
            </p> */}
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 6.png" />
            {/* <h2>
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
            </p> */}
          </ImageSection>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section6;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
  color: ${(props) => props.textColor};

  @media (max-width: 976px) {
    padding: 100px 0;
  }
  
`;

const ItemText = styled.div`
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
  border-radius: 50%;

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