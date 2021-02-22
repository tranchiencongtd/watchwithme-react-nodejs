import React, { Component } from "react";
import io from "socket.io-client";

import TopBar from '../TopBar/TopBar';  
import Input from './InPut';
import Messages from './Messages';

const ENDPOINT = 'http://localhost:5000';
const socket = io(ENDPOINT);

class MainChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  componentDidMount() {
    console.log(this.state.message);
    
    socket.emit('joinRoom', 'hello');
  }

  setMessage(value) {
    console.log(value);
    this.setState({
      message: value
    });
  }

  sendMessage(e) {
    e.preventDefault();

    if(this.setState.message) {
      socket.emit('sendMessage', this.setState.message, () => this.setState({message: ''}));
    }
  }

  render() {
    return (
      <div className="col-md-4 d-none d-md-block">
        <div className="container-chat">
          <div className="chatbox">
            <TopBar />
            <Messages />
            <Input message={this.state.message} setMessage={this.setMessage.bind(this)} sendMessage={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainChat;
