import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component {
  // set a value for some data
  state = { language: 'english' };

  // ability to change the data
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  // setup a provider to pass the value to all children
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
