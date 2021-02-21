import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
        <div className="top-bar">
                  <div className="avatar">
                    <p>V</p>
                  </div>
                  <div className="name">Voldemort</div>
                  <div className="menu">
                    <div className="dots"></div>
                  </div>
        </div>
    )
  }
}

export default TopBar;
