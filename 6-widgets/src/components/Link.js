import React from 'react';

// component to trigger Navigation Event
// passed to each route, and appropriate component.

const Link = ({ className, href, children }) => {
  // prevent page reload, change URL, and navigate to new path
  const onClick = (event) => {
    // if user holding command or control, then open on new tab
    // we do NOT want to prevent default behavior
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // if user clicked on a link, prevent default behavior
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
