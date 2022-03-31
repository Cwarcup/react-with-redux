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
  // is our callback for StreamForm
  onSubmit = (formValues) => {
    console.log(formValues);
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
