import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function NewSection4({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap bgImage={backgroundImg} colory={color}>
      <Fade bottom>
        <Heading>
          <Text1>FREQUENTLY</Text1>
          <Text2>ASKED QUESTIONS</Text2>
        </Heading>
        <Question>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
          <List>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
            <Quest>
              <p>
                When will Metaversity launch its collection?
              </p>
              <div>
                <p>+</p>
              </div>
            </Quest>
          </List>
        </Question>

      </Fade>
    </Wrap >
  );
}

export default NewSection4;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-color: #25252D;
`;

// #25252D

const Heading = styled.div`
  margin: 0 0 40px 0;
`;

const Text1 = styled.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke : 1px white;
  font-size: 60px;
`;
const Text2 = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 60px;

`;
const Question = styled.div``;

const Quest = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  border: 1px solid #37373e;
  background-color: #1F1F26;
  padding: 20px 20px;
  border-radius: 50px;
  color: white;
  margin: 10px;
  font-size: 20px;


  div {
    display: flex;
    justify-content : center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    color: black;
    font-size: 40px;
    margin: 0;
    padding: 0;
    font-weight: bold;


    p {
      padding: 0;
      margin: 0;
    }
  }
`;


const List = styled.div`
  display: flex;
`;