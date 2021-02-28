import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
        <div className="top-bar">
                  <div className="avatar">
                    <p style={{marginLeft: '20%'}}>&#128172;</p>
                  </div>
                  <div className="name">Box chat ;)</div>
                  <div className="menu">
                    <div className="dots"></div>
                  </div>
        </div>
    )
  }
}

export default TopBar;
