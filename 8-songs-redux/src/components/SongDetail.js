import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div className="ui cards">
        <div className="ui active inverted dimmer">
          <br></br>
          <div className="ui indeterminate text loader">Select A Song</div>
        </div>
        <p></p>
      </div>
    );
  }

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Details For: {selectedSong.title}</div>
          <div className="description">Duration: {selectedSong.duration}</div>
        </div>
      </div>
    </div>
  );
};

// we want to grab to state from the redux store,
// and pass it down to the component as props
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
