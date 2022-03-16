import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null }; // setting default value

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // position is an object returned is our getCurrentPosition() runs sucessfully

        console.log(position);

        this.setState({ lat: position.coords.latitude }); // use setState() to update
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div> Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
