import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  // use action creator to fetch stream
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // use action creator to delete stream
  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  // render modal actions, buttons in our case
  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.deleteStream} className="ui negative button">
          Delete
        </button>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  // render any modal content
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
