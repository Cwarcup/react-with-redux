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

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
  // remember, our streams are an object. Need to get the values out of it.
  // use Object.values() to get the values out of the object.
  // now we have a prop called streams that is an array of all our streams.
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
