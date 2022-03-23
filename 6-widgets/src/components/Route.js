import React from 'react';

// create and show components with custom routes
// props will be the path and component we want to render
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
