import React, { Component, Fragment } from "react";
import "./Autocomplete.css";

const ENTER_KEY = 13;
const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0, //index of the selected suggestion
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  onChange = (e) => {
    console.log("onChange");
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    console.log("onClick");
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = (e) => {
    console.log("onKeyDown");
    const { activeSuggestion, filteredSuggestions } = this.state;

    //if the ENTER key is pressed
    if (e.keyCode === ENTER_KEY) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === UP_ARROW_KEY) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === DOWN_ARROW_KEY) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
    }
    this.setState({ activeSuggestion: activeSuggestion + 1 });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }
    return (
      <>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </>
    );
  }
}

export default AutoComplete;
