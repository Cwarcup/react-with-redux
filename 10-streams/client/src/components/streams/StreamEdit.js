// need to communicate which which stream is being edited

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // onSubmit is our callback for StreamForm
  // remember, editStream is an action creator that takes in an id, and formValues
  // and makes a put request to /streams/${id}, with the updated formValues
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div className="ui small inline active loader"></div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // props will now contain a stream property, with the stream we want to edit.
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
