import React, { Component } from 'react';

import Message from './Message';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="middle style-3">
              <div className="voldemort">
                
              {this.props.messages.map((message, i) => <div key={i}><Message message={message} name={this.props.name} /></div>)}
             

                {/* <div className="typing">
                  <div className="bubble">
                    <div className="ellipsis one"></div>
                    <div className="ellipsis two"></div>
                    <div className="ellipsis three"></div>
                  </div>
                </div> */}
              </div>
            </div>
    )
  }
}

export default Messages
