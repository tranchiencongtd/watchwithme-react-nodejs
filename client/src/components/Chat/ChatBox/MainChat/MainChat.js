import React, { Component } from "react";

import TopBar from '../TopBar/TopBar';  
import InComing from "./InComing";
import OutComing from "./OutComing";

class MainChat extends Component {
  render() {
    return (
      <div className="col-md-4 d-none d-md-block">
        <div className="container-chat">
          <div className="chatbox">
            <TopBar />
            <div className="middle style-3">
              <div className="voldemort">
                
                <InComing />
                <OutComing />

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
    );
  }
}

export default MainChat;
