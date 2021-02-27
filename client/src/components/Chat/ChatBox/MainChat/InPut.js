import React, { Component } from "react";

class InPut extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    
    return (
      <div className="bottom-bar">
        <div className="chat">
          <input 
          type="text" 
          placeholder="Type a message..."
          value={this.props.message}
          onChange={({ target: { value } }) => this.props.setMessage(value)}
          />
          <button onClick={(e) => this.props.sendMessage(e)}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default InPut;
