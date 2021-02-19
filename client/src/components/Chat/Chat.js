import React, { Component } from "react";

import "./Chat.css";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idYoutube: "",
      inputValue: "",
    };
  }

  changeVideo = () => {
    let video_id = this.state.inputValue.split("v=")[1];
    let ampersandPosition = video_id.indexOf("&");

    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    this.setState({
      idYoutube: video_id,
      inputValue: "",
    });
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      this.changeVideo();
    }
  };

  onClick = () => {
    this.changeVideo();
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  render() {
    let id = this.state.idYoutube;
    return (
      <div className="container fix">
        <div className="row">
          <div className="col-md-8 p-0">
            <div className="search__container">
              {/* <p className="search__title">
                    
                </p> */}
              <input
                className="search__input"
                type="text"
                onKeyDown={this._handleKeyDown}
                value={this.state.inputValue}
                onChange={(evt) => this.updateInputValue(evt)}
                spellCheck = "false"
                placeholder ="Tìm kiếm hoặc dán link youtube vào đây"
              />
              <i
                className="fas fa-search fix-search"
                onClick={this.onClick}
              ></i>
            </div>
          </div>
        </div>

        <div className="row setup">
          <div className="col-md-8 p-0 video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${this.state.idYoutube}`}
            ></iframe>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="container-chat">
              <div className="chatbox">
                <div className="top-bar">
                  <div className="avatar">
                    <p>V</p>
                  </div>
                  <div className="name">Voldemort</div>
                  <div className="menu">
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="middle" id="style-3">
                  <div className="voldemort">
                    <div className="incoming">
                      <div className="bubble">
                        What are you getting.. Oh, oops sorry dude.
                      </div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">
                        Well you should get your Dad a cologne. Here smell it.
                      </div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">
                        What are you getting.. Oh, oops sorry dude.
                      </div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">lorem</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>

                    <div className="typing">
                      <div className="bubble">
                        <div className="ellipsis one"></div>
                        <div className="ellipsis two"></div>
                        <div className="ellipsis three"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-bar">
                  <div className="chat">
                    <input type="text" placeholder="Type a message..." />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="row list-video">
          <div className="col-md-8 p-0 search-list">
            <div className="card-deck">
            </div>
            <div className="card-columns">
              <div className="card"></div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Chat;
