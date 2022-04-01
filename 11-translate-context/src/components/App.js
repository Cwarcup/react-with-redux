import React, { Component } from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../context/LanguageContext';

export class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag ca"
            onClick={() => this.onLanguageChange('english')}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate />
      </div>
    );
  }
}

export default App;
