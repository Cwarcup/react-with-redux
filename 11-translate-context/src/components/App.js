import React, { Component } from 'react';

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
        {this.state.language}
      </div>
    );
  }
}

export default App;
