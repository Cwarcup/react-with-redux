import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export class Field extends Component {
  static contextType = LanguageContext; // forms the link between the context and the component

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
