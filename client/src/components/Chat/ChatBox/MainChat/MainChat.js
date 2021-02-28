import React, { Component } from "react";
import io from "socket.io-client";

import TopBar from '../TopBar/TopBar';  
import Input from './InPut';
import Messages from './Messages';
import queryString from 'query-string';



class MainChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: '',
      idMess: '',
      img: '',
      message: '',
      users: [],
      messages: [],
    };
    this.socket = io('http://localhost:5000');
  }

  componentDidMount() {
    const { name, room, id, img }= queryString.parse(window.location.search);
    
    this.setState({
      name,
      room,
      idMess: id,
      img,
    });


    this.socket.emit('joinRoom', {name, room, id, img} , (err) => {
      if(err) {
        alert(err);
      }
    });

    this.socket.on('message', message => {
      this.setState({
        messages : [ ...this.state.messages, message]
      });
    });
    
}

  sendMessage = (e) => {
    e.preventDefault();
    if(this.state.message) {
      this.socket.emit('sendMessage', this.state.message, () => this.setState({message: ''}));
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
            <Messages messages={this.state.messages} 
            idMess={this.state.idMess}
            
            />
          
            <Input 
            message={this.state.message} 
            setMessage={this.setMessage.bind(this)} 
            sendMessage={this.sendMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainChat;
