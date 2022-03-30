import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import streams from '../../apis/streams';

// display a list of streams
// will use a class based component because we want to use componentDidMount() to fetch the data one time.

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
  // remember, our streams are an object. Need to get the values out of it.
  // use Object.values() to get the values out of the object.
  // now we have a prop called streams that is an array of all our streams.
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
