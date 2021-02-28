import React, { Component } from "react";
import { Link } from "react-router-dom";
import { customAlphabet } from 'nanoid';


import Footer from "../Chat/Footer/Footer";

import "./Join.css";

import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

// Importing toastify module
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

const nanoid = customAlphabet('1234567890abcdef', 10);

const clientId =
  "173166829954-4va2pebhlsgqsr8riavk01m8nm9k8r4q.apps.googleusercontent.com";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      roomModal: '',
      fullName: '',
      name: '',
      room: '',
      img: '',
      email: '',
      loginSuccess: false,
    };
    
  }

  closeModal() {
    const modal = document.querySelector('.modal-backdrop')
    if(modal) {
      modal.parentNode.removeChild(modal);
    }
  }

  toastUp(str) {
    toast(str);
  }

  logout() {
    this.setState({
      fullName: '',
      familyName: '',
      givenName: '',
      room: '',
      img: '',
      email: '',
      loginSuccess: false,
    });

    console.log("logout success");
  }

  componentDidMount() {
  }

  responseGoogle(response) {
    const googleResponse = {
      fullName: response.profileObj.name,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      token: response.googleId,
      image: response.profileObj.imageUrl,
      email: response.profileObj.email,
    };

    this.setState({
      fullName: googleResponse.fullName,
      familyNname: googleResponse.familyName,
      givenName: googleResponse.givenName,
      user: googleResponse.token,
      img: googleResponse.image,
      email: googleResponse.email,
      room: nanoid(),
      loginSuccess: true,
    });

  }

  responseGoogleF(response) {
    this.setState({
      loginSuccess: false,
    });
  }

  render() {
    return (
      <>
        <div
          className="modal fade"
          id="codeRoom"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Nhập mã phòng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input className="input-modal" type="text" autoFocus onChange={({target: {value}}) => this.setState({roomModal: value})}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn close-modal"
                  data-dismiss="modal"             
                >
                  Đóng
                </button>
                <Link
                      onClick={(e) =>
                          !this.state.roomModal
                          ? (e.preventDefault(), this.toastUp('Nhập sai mã phòng'))
                          : (null,  this.closeModal())
                      }
                      to={ `/chat?name=${this.state.givenName ? this.state.givenName: this.state.familyName}&room=${this.state.roomModal}&img=${this.state.img}&fn=${this.state.fullName}&id=${this.state.user}`}
                    >
                <button className="btn join-modal" data-toggle="modal" data-target="#myModal">
                  OK
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container fix">
          <div className="join-page">
            <div className="container" id="container">
              <div className="form-container sign-in-container">
                <form action="#">
                  {this.state.loginSuccess ? (
                    <div style={{ width: "100%" }}>
                      <img src={this.state.img} alt="user" />
                      <div>
                        <h5 style={{ margin: "10px 0px" }}>
                          {this.state.fullName}
                        </h5>
                      </div>
                      <GoogleLogout
                        clientId={clientId}
                        render={(renderProps) => (
                          <button
                            onClick={renderProps.onClick}
                            className="btn-out"
                          >
                            LOG OUT
                            <i className="fas fa-hand-paper"></i>
                          </button>
                        )}
                        onLogoutSuccess={this.logout.bind(this)}
                      ></GoogleLogout>
                    </div>
                  ) : (
                    <>
                      <h1>Login with</h1>
                      <div className="social-container">
                        <GoogleLogin
                          clientId={clientId}
                          render={(renderProps) => (
                            <button
                              className="btn-sign btn-g"
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              <i className="fab fa-google-plus-g"></i>
                            </button>
                          )}
                          onSuccess={this.responseGoogle.bind(this)}
                          onFailure={this.responseGoogleF.bind(this)}
                          isSignedIn={true}
                          cookiePolicy={"single_host_origin"}
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
                    </>
                  )}

                  <span>Let's start right now!</span>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-right">
                    {this.state.loginSuccess ? (
                      <h1>Hi, {this.state.givenName ? this.state.givenName: this.state.familyName}</h1>
                    ) : (
                      <h1>WELCOME!</h1>
                    )}
                    <p>Go to watch and chat with your friends.</p>
                    
                    <Link
                      onClick={(e) =>
                        !(this.state.givenName ? this.state.givenName: this.state.familyName) || !this.state.room
                          ? (e.preventDefault(), this.toastUp('Bạn cần đăng nhập trước'))
                          : null
                      }
                      to={ `/chat?name=${this.state.givenName ? this.state.givenName: this.state.familyName}&room=${this.state.room}&img=${this.state.img}&fn=${this.state.fullName}&id=${this.state.user}`}
                    >
                      <button className="ghost">
                        Create
                        <i className="fas fa-plus"></i>
                      </button>
                    </Link>
                    
                    
                    <button
                      className="ghost"
                      data-toggle="modal"
                      data-target="#codeRoom"
                    >
                      Join
                      <i className="fas fa-sign-in-alt"></i>
                    </button>
                    
                    {/* Modal */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Chat;
