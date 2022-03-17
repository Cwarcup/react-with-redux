import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div class="ui segment season-display">
        <div class="ui active dimmer">
          <div class="ui massive text loader">Loading</div>
        </div>
      </div>
    );
  }
}
