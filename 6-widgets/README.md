# Widget App

## App Architecture

App
- items prop to pass to Accordion
  - will be an array of object
    - title: post title
    - content: ...
- Accordion
  - will be a component which displays content with a drop down menu.
  - want to make reusable.
  - will use the prop to display content.
  - will use activeIndex to set state of the expanded tab.
  
  # Goal

  - Lean how to use React hooks.
    - Accordion: useState hook
    - List: useEffect and useState hook
    - Dropdown: useRef, useEffect, useState hook
    - Translate: useRef, useEffect, useState hook
