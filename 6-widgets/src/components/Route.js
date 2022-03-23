import React, { useState, useEffect } from 'react';

// create and show components with custom routes
// props will be the path and component we want to render
const Route = ({ path, children }) => {
  // useState to update our route
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // event listener to listen for changes in the URL
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // listen for changes in the URL
    window.addEventListener('popstate', handleRouteChange);

    // clean up event listener
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
