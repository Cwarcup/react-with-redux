// need to communicate which which stream is being edited

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div className="ui small inline active loader"></div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // props will now contain a stream property, with the stream we want to edit.
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
