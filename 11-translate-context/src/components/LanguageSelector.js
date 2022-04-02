import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        <div>
          Select a language:
          <i
            className="flag ca"
            onClick={() => this.context.onLanguageChange('english')}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.context.onLanguageChange('dutch')}
          ></i>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
