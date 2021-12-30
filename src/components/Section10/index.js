import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section10({
  textColor,
  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ImageSection1 textColor= {textColor}>
          <ImageArea>
            <Image src="/images/15.webp" />
            <h3>TROU</h3>
            <h5>UTILITY</h5>
            <p>
              A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.
            </p>
          </ImageArea>
          <ImageArea>
            <Image src="/images/16.webp" />
            <h3>RICK</h3>
            <h5>SMART</h5>
            <h5>CONTRACTS</h5>
            <p>
              Leading Digimental’s interface with the blockchain and securing the future of the HAPES. Tech’s back in fashion.
            </p>
          </ImageArea>
          <ImageArea>
            <Image src="/images/17.webp" />
            <h3>JUSTCARL</h3>
            <h5>STRATEGY</h5>
            <p>
              Noise & positioning. Want to talk to the HAPEBEAST team about a commercial arrangement? Carl’s your point of contact.
            </p>
          </ImageArea>
          <ImageArea>
            <Image src="/images/18.webp" />
            <h3>MR.KRIME</h3>
            <h5>MUSIC</h5>
            <p>
              Everything in our world moves to a beat. The ape multiverse is no different and Krime has every one of those beats covered.
            </p>
          </ImageArea>
          <ImageArea>
            <Image src="/images/19.webp" />
            <h3>STALONE</h3>
            <h5>MOD</h5>
            <p>
              Fifty percent of the power behind the mod team: crafting Discords, taking names. Good communities need the best leadership.
            </p>
          </ImageArea>
          <ImageArea>
            <Image src="/images/20.webp" />
            <h3>CYTRUS</h3>
            <h5>MOD</h5>
            <p>
              The other half of our moderation enforcement squad. Fighting bots and taking the battle back to the scammers.
            </p>
          </ImageArea>
        </ImageSection1>
        <ImageSection2>
          <ImageArea>
            <Image src="/images/21.webp" />
          </ImageArea>
        </ImageSection2>
      </Fade>
    </Wrap>
  );
}

export default Section10;

const Wrap = styled.div`
  width: 100vw;
  min-height : 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction : column;
  justify-content: space-around;
  align-items: center;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
  margin : 20px 0;

  @media (max-width : 976px) {
    min-height: 150vh;
    }
  @media (max-width : 500px) {
    min-height: 360vh;
    }
`;

const ImageSection1 = styled.div`
width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap : wrap;
  color: ${(props)=> props.textColor}

  
`
const ImageSection2 = styled.div`
  display: flex;
`
const ImageArea = styled.div`
  display: flex;
  flex-direction : column;
  align-items: center;

  h3 {
  margin: 0;
  margin-bottom: 5px;
  }
  h5 {
    margin: 0;
  }
  p {
    max-width : 250px;
    font-size : 15px;
  }

`
const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom : 15px;
`
