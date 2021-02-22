import React, { Component } from 'react';

import InComing from "./InComing";
import OutComing from "./OutComing";

class Messages extends Component {
  static propTypes = {

  }

  render() {
    return (
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
    )
  }
}

export default Messages
