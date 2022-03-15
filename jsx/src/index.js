// import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = () => {
  const buttonText = { text: 'click me' };
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter Name:';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
