// need to communicate which which stream is being edited

import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
  console.log('props', props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // props will now contain a stream property, with the stream we want to edit.
};
export default connect(mapStateToProps)(StreamEdit);
