import React, { Component } from 'react';

export class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <div>
          Select a language:
          <i
            className="flag ca"
            onClick={() => this.props.onLanguageChange('english')}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.props.onLanguageChange('dutch')}
          ></i>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
 