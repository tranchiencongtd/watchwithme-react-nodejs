import React, { Component } from 'react'

import './Footer.css';
export class Footer extends Component {
  render() {
    return (
      <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center align-md-end icons">
          <i className="fab fa-facebook" href="https://www.facebook.com/congngusi" target="_blank"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h6>Made by Tran Chien Cong with ❤️</h6>
        </div>
      </div>
      </>
    )
  }
}

export default Footer
