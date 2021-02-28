import React, { Component } from 'react';

import Message from './Message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  
  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" })
  }

  render() {
    return (
          <div className="middle style-3">
              <div className="voldemort">
                
              {this.props.messages.map((message, i) => 
                <div key={i}>
                  <Message message={message} 
                  idMess={this.props.idMess} 
                  img={this.props.img}
                  />
                </div>)}
             
                <div ref={this.messagesEndRef} />
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
