// reducing functions
import { combineReducers } from 'redux';

// song list reducer: returns a static list of songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

// selected song reducer: returns the selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// will pass in an object. The keys of our object will be the keys that show up in our state object.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
