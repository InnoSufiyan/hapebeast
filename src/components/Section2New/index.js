import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section2New({
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
          <ImageSection style={{
              backgroundImage: "linear-gradient(to right, #280f2c, #2f0a36)"
            }}>
            <Image src="/images/Metaversity 2_2.png" />
            <h1>Character 1</h1>
          </ImageSection>
          <ImageSection style={{
              backgroundImage: "linear-gradient(to right, #243e55, #1b2664)"
            }} >
            <Image src="/images/Metaversity 3_2.png" />
            <h1>Character 1</h1>
          </ImageSection>
          <ImageSection style={{
              backgroundImage: "linear-gradient(to right, #6b571c, #614d2c)"
            }}>
            <Image src="/images/Metaversity 6_2.png" />
            <h1>Character 1</h1>
          </ImageSection>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}


// background: linear-gradient(to right,
  // #ba10d5, #f265ff);

export default Section2New;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image : radial-gradient(#0e336a, #020204); */
  /* background-image : radial-gradient(ellipse farthest-corner at 90% 90%,
      #937a31 0%, #020204 70%); */
      background : url('/images/4.png') center center / contain, radial-gradient(ellipse farthest-corner at 90% 90%,
        #6b571c 0%, #020204 70%);
  background-blend-mode: overlay;
`;

const ImageArea = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-top : 60px;
  gap: 20px;

`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 150px;
  border-radius : 20px;
  

        h1 {
          color : white;

        }


  `;

const Image = styled.img`
width: 150px;
height: 250px;

`;



const Buttons = styled.div``;
