import React from "react";
import Audio from "./Audio";
import Container from "./Container";

const Word = (props) => {
  return (
    <div>
      <Container>
        <div>{props.word}</div>
        <Audio sound={props.sound} />
        <div>{props.definition}</div>
      </Container>
    </div>
  );
};

export default Word;
