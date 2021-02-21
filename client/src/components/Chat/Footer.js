import React, { Component } from 'react'

import './Footer.css';
export class Footer extends Component {
  render() {
    return (
      <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center align-md-end icons">
          <a href="https://www.facebook.com/congngusi" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://github.com/tranchiencongtd" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/hiimtcc" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
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
