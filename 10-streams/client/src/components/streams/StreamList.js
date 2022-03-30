import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

// display a list of streams
// will use a class based component because we want to use componentDidMount() to fetch the data one time.

class StreamList extends Component {
  // fetchStreams on first page load
  componentDidMount() {
    this.props.fetchStreams();
  }

  // method to render edit and delete buttons of logged in user created the stream
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  // method to render stream list
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  // method to render create stream button if a user is logged in
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui right labeled icon button">
            <i className="plus square outline icon"></i>
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
  // remember, our streams are an object. Need to get the values out of it.
  // use Object.values() to get the values out of the object.
  // now we have a prop called streams that is an array of all our streams.
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
