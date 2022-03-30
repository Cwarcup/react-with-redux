import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

// display a list of streams
// will use a class based component because we want to use componentDidMount() to fetch the data one time.

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return <div>StreamList</div>;
  }
}

export default connect(null, { fetchStreams })(StreamList);
