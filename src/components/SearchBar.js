import React from "react";
import "../style/SearchBarStyle.css";

class SearchBar extends React.Component {
  state = { placeholder: "" };

  componentDidMount() {
    const random = Math.floor(Math.random() * 3);
    let placeholder;
    switch (random) {
      case 0:
        placeholder = "Search something!";
        break;
      case 1:
        placeholder = "Do it search!";
        break;
      case 2:
        placeholder = "Search once learn a lot!";
        break;
      default:
    }

    this.setState({ placeholder: placeholder });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div id="searchBar" className="ui fluid icon input">
            <input
              type="text"
              value={this.props.term}
              placeholder={this.state.placeholder}
              onChange={this.props.onChange}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
