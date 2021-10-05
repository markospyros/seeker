import React from "react";
import SearchBar from "./SearchBar";
import Word from "./Word";
import axios from "axios";

class App extends React.Component {
  state = { words: [], term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSearchSubmit = (event) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.term}`)
      .then((res) => {
        const words = res.data;
        this.setState({ words });
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSubmit={this.onSearchSubmit}
          onChange={this.onInputChange}
        />
        {this.state.words.map((item) => (
          <div>
            <Word
              word={item.word}
              definition={item.meanings[0].definitions[0].definition}
              sound={item.phonetics[0].audio}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
