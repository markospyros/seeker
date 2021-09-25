import React from "react";
import Container from "./Container";

class Word extends React.Component {
  state = { words: [] };

  render() {
    return (
      <div>
        <Container>
          <div>{this.props.word}</div>
          <i className="volume up icon"></i>
          <div>{this.props.definition}</div>
        </Container>
      </div>
    );
  }
}

export default Word;
