import React, { Component } from "react";

import "./Join.css";

import GoogleLogin from "react-google-login";

class Chat extends Component {
  responseGoogle(response) {
    console.log(response);
  }

  render() {
    return (
      <div class="join-page">
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in with</h1>
              <div class="social-container">
                  <GoogleLogin
                    clientId="173166829954-4va2pebhlsgqsr8riavk01m8nm9k8r4q.apps.googleusercontent.com"
                    render={renderProps => (
                      <button className="btn-sign btn-g" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i class="fab fa-google-plus-g"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    class="social"
                  />
              
                <GoogleLogin
                    clientId="173166829954-4va2pebhlsgqsr8riavk01m8nm9k8r4q.apps.googleusercontent.com"
                    render={renderProps => (
                      <button className="btn-sign btn-f" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i class="fab fa-facebook-f"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    class="social"
                  />
                  
                <GoogleLogin
                    clientId="173166829954-4va2pebhlsgqsr8riavk01m8nm9k8r4q.apps.googleusercontent.com"
                    render={renderProps => (
                      <button className="btn-sign btn-git" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i class="fab fa-github"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    class="social"
                  />
              </div>
              <span>Let's start right now!</span>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <h1>WELCOME</h1>
                <p>Join to watch and chat with your friends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
