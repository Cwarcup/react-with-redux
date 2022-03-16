import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor is used when we want to create some initial setup when our component is created. It is optional.
  constructor(props) {
    //must call super()
    super(props);

    // this is the only place we do direct assignment
    // to this.state
    this.state = { lat: '', errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // setState() to change state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ lat: '', errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage & this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading 🙃</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
