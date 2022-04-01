import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary ">{text}</button>;
  }
}

export default Button;
