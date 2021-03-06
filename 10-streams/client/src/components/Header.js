import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

// header component
// display links to Streamer, login and list of streams.

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        StreamHub
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
