import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '', placeholder: 'Search' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div class="ui category search">
          <div onSubmit={this.onFormSubmit} class="ui icon input">
            <input
              class="prompt"
              type="text"
              placeholder={this.state.placeholder}
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i class="search icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
