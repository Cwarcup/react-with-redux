import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ lat: '', errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('Update occured');
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
