import React, { Component } from 'react';

export class GoogleAuth extends Component {
  state = { isSignedIn: null }; // we do not know if user is signed in or not.

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '604916494985-i5lp3u083o2cm90qv7tagn93blsjogha.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); // get auth instance
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // set state
          // listen for changes in auth status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // onAuthChange is called when auth status changes
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  // render auth button
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div> I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
