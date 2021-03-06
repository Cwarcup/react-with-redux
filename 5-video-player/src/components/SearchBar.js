import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '', placeholder: 'Search' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div className="ui category search">
          <i className="big youtube icon"></i>
          <form onSubmit={this.onFormSubmit} className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder={this.state.placeholder}
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i className="search icon"></i>
          </form>
        </div>
      </div>
    );
  }
}
