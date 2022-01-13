import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function RoadMap({

  backgroundImg,
  color,
  imagey,
}) {
  return (
    <Wrap bgImage={backgroundImg} checkImage={imagey} colory={color}>
      <Fade bottom>
        <ItemText>
          <h1>
            Road Map
          </h1>
          <p>
            Our plans moving forward into 2022.
          </p>
        </ItemText>
        <MainDiv>
          <FirstDiv>
            <h3>Monkeys are Born</h3>
            <p>
            The community always comes first. The goal with this project is to provide as much value as possible so that you get the greatest return on your investment. We will be announcing the drop release date once we are fully satisfied with all parts of the project. We want to make sure we provide as much as we can to the community even before our release. Once we are satisfied, the beautiful 3D Metaversity Monkeys will come to life.
            </p>
          </FirstDiv>
          <SecondDiv>
            <img src="/images/roadmap 2.png" />
          </SecondDiv>
          <ThirdDiv>

          </ThirdDiv>
        </MainDiv>
      </Fade>
    </Wrap>
  );
}

export default RoadMap;

const Wrap = styled.div`
  width: 100vw;
  height: 250vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.checkImage ? `url("/images/${props.bgImage}")` : `radial-gradient(${props.colory}, ${props.colory} , ${props.colory})`};
`;

const ItemText = styled.div`
  color: white;
  text-align: center;
  padding: 120px 0 0 0;
  

  h1 {
    margin: 0;
    padding: 0;
    font-size: 80px;
  }

  p {
    font-size: 20px;
    margin: 20px;
    padding: 0;
  }
`;

const MainDiv = styled.div`
  margin: 60px 0 0 0;
`
const FirstDiv = styled.div`
`
const SecondDiv = styled.div`
  
`
const ThirdDiv = styled.div`
`


const Buttons = styled.div``;