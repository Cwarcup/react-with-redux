import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

// Setting up Google OAuth2.0

class GoogleAuth extends Component {
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
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  // sign in with google
  onSignInClick = () => {
    this.auth.signIn();
  };

  // sign out
  onSignOutClick = () => {
    this.auth.signOut();
  };

  // render auth button
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
