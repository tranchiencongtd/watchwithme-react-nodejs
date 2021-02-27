import React, { Component } from "react";
import io from "socket.io-client";

import TopBar from '../TopBar/TopBar';  
import Input from './InPut';
import Messages from './Messages';
import queryString from 'query-string';


const ENDPOINT = 'http://localhost:5000';
let socket = io(ENDPOINT);

class MainChat extends Component {
  static socket = socket = io(ENDPOINT);
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: '',
      message: '',
      users: [],
      messages: ['ahihi', 'do ngok'],
    };
  }
  componentDidMount() {
    const { name, room }= queryString.parse(window.location.search);

    this.setState({
      name,
      room
    });

    socket.emit('joinRoom', {name, room} , (err) => {
      if(err) {
        alert(err);
      }
    });

    socket.on('message', message => {
      this.setState({
        messages : [ ...this.state.messages, message]
      });
    });
    
}

  sendMessage = (e) => {
    e.preventDefault();
    if(this.state.message) {
      socket.emit('sendMessage', this.state.message, () => this.setState({message: ''}));
    }
  }

  setMessage(value) {
    this.setState({
      message: value
    });
  }

  render() {
    return (
      <div className="col-md-4 d-none d-md-block">
        <div className="container-chat">
          <div className="chatbox">
            <TopBar />
            <Messages messages={this.state.messages} />
            {/* name={this.state.name} */}
            <Input 
            message={this.state.message} 
            setMessage={this.setMessage.bind(this)} 
            sendMessage={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainChat;
