import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let isSentByCurrentUser = false;
    const { text, idMess, img } = this.props.message;

    

    if(idMess === this.props.idMess) {
      isSentByCurrentUser = true;
    }

    return ( 
      isSentByCurrentUser
      ? (
        <>
        <div className="outcoming">
          <div className="bubble">
          {text}
          </div>
        </div>
        </>
      ) 
      : (
      <>
      <div className="incoming">
      <img src={img} alt="user"/>
        <div className="bubble">
          {text}
        </div>
      </div>
      </>
      )
      
    )
  }
}

export default Message;