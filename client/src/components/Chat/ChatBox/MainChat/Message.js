import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let isSentByCurrentUser = false;
    const { text, user } = this.props.message;
    const trimmedName = this.props.name.trim().toLowerCase();

    if(user === trimmedName) {
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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7e9ee8-5cde-4df2-b104-7b4e6118a8dd/d9bvt83-152d7ff6-0bb8-4ab4-bb80-11cfaa528b31.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWI3ZTllZTgtNWNkZS00ZGYyLWIxMDQtN2I0ZTYxMThhOGRkXC9kOWJ2dDgzLTE1MmQ3ZmY2LTBiYjgtNGFiNC1iYjgwLTExY2ZhYTUyOGIzMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.tH-l4s_Z8XAt7r0bDEZX2Tm0faK8sqAeF4PH1Ds2R4Y" alt="user"/>
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