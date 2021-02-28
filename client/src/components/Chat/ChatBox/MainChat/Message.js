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
      <>
      {idMess === 'admin' ? (
          <div style={{textAlign: 'center', margin: '5% 0', color: '#777777', fontWeight: '400', opacity: '.7', lineHeight: '1'}}>
          <img src={img} style={{width:'30px', marginRight:'2%'}} alt="admin"/>
          <span>{text}</span>
          </div>
          ) : ( isSentByCurrentUser
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
            ))}
     
      </>
    )
  }
}

export default Message;