import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div className="incoming outcoming">
        <div className="bubble">
          {this.props.message}
        </div>
      </div>
    )
  }
}

export default Message;