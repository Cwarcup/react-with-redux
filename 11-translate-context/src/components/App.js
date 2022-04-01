import React, { Component } from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
