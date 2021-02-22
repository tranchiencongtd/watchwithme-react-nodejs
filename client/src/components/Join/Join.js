import React, { Component } from "react";

import "./Join.css";

import GoogleLogin from "react-google-login";

class Chat extends Component {
  responseGoogle(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="join-page">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in with</h1>
              <div className="social-container">
                  <GoogleLogin
                    clientId="173166829954-4va2pebhlsgqsr8riavk01m8nm9k8r4q.apps.googleusercontent.com"
                    render={renderProps => (
                      <button className="btn-sign btn-g" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fab fa-google-plus-g"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    className="social"
                  />
              
                {/* <GoogleLogin
                    clientId="#"
                    render={renderProps => (
                      <button className="btn-sign btn-f" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    class="social"
                  />
                  
                <GoogleLogin
                    clientId="#"
                    render={renderProps => (
                      <button className="btn-sign btn-git" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fab fa-github"></i>
                      </button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    className="social"
                  /> */}
              </div>
              <span>Let's start right now!</span>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hi, Công</h1>
                <p>Go to watch and chat with your friends.</p>
                <button 
                className="ghost"
                id="signUp"
                onClick={() => {window.open('http://localhost:3000/chat', '_self');}}
                >Create Room
                <i className="fas fa-plus"></i>
                </button>
                <button className="ghost" >Join Room
                <i className="fas fa-sign-in-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
