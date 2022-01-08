import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section12({

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
            Meet the team.
          </h3>
          {/* <h4>
            Here is the team that is managing this project with the aArtist, Gal. Don't worry, we also have 15 team members taking care of our Social medias, discord, marketing and more.
          </h4> */}
        </ItemText>
        <ImageArea>
          <ImageSection>
            <Image src="/images/Metaversity 2.png" />
            <TextArea>
              <h2>
                Srikar
              </h2>
              <p>
                Co-Founder, Project Lead, Digital Marketer, Web 3.0 Enthusiast.
              </p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 3.png" />
            <TextArea>
              <h2>
                Sai
              </h2>
              <p>
                Co-Founder, Community builder, Social Media strategist, NFT Enthusiast.
              </p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 6.png" />
            <TextArea>
              <h2>
                Harsha
              </h2>
              <p>
                Community Manager, Tech expert, startup aficionado and discord guru.
              </p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/Metaversity 4.png" />
            <TextArea>
              <h2>
                Nate
              </h2>
              <p>
                Marketing Lead, Agency founder who manages over 5000 influencers.
              </p>
            </TextArea>
          </ImageSection>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section12;

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
  padding: 125px 0;  

  @media (max-width: 976px) {
  }

  @media (max-width: 400px) {
    justify-content: space-around;
  }
  
`;

const ItemText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    max-width: 500px;
    padding : 0 20px;
  }

 
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
  position: relative;
  display: flex;
  justify-content: center;
  
  
  @media (max-width: 976px) {
    margin: 40px 0;

  }

  h2 {
    color: white; 
    @media (max-width : 400px) {
      font-size: 15px;  
    }
  }
  p {
    @media (max-width : 400px) {
      font-size: 14px;  
    }
  }
`;

const Image = styled.img`
  width: 360px;
  height: 360px;

  @media (max-width: 400px) {
    width: 200px;
  height: 200px;
  }
`;

const ImageArea = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-top : 60px;
  gap: 60px;

  @media (max-width: 1200px) {
    flex-direction: column;
    
  }
  @media (max-width: 400px) {
    margin-top : 30px;
  }
`;


const TextArea = styled.div`
  width: 300px;
  bottom: -50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background-color : #232323;
  color : #c3cec3;
  padding: 20px;

  h2, p {
    margin: 0;
  }

  @media (max-width: 400px) {
    width: 140px;
  }
`
