# Pic App with React

## App Challenge
- Need to get a search term from a user.
- Need to use the search term to make a request to an outside API and fetch data. 
- Need to take the fetched images and show them on the screen.

Components
- App component to render everything.
- SearchBar will handle user search terms.
- ImageList will render images on the screen.

## Overview

Event handlers
- we take a specific tag (i.e., input or form)
  - whenever that tag emits that event, our callback function will be called. 
  - ran into an issue with `this`.
    - REMEMBER: use arrow function syntax to bind the function and ensure this has the appropriate value.

Props
- we learnt that props can only be communicated from a parent down to a child.
  - this became an issue when we wanted to communicate the search term from the `SearchBar` up to the parent component (`App.js`).
  - Solution: we pass a callback from the parent to the child, then the child calls the callback. 

ImageList Rending
- map function from JS
- anytime we create a list we have to define a **key** which has a value that is consistent and unchanging from the other records. 
  - often use to ID

ImageCard ref system
- when we want to reach into the DOM and interact with a particular element. 
- we create a ref inside the constructor and then send it to the element using props. 
  
Grid CSS
- didn't get into too much detail, but used it to properly layout our images and use the ref system. 

[summary video](https://www.udemy.com/course/react-redux/learn/lecture/12531340#content)