import React, { Component } from "react";
import axios from 'axios';

import SearchResult from './SearchResult';
import Footer from './Footer';

import "./Chat.css";

// const API = 'AIzaSyCTYDkDvgIVWWLYcUCNUWFzbwY0hLnfB0c';
const API = 'AIzaSyD_2O5NzPNVJ1DcyKPiFzunWOUqB5oCmxk';

// const API = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
export class Chat extends Component {
  constructor(props) {
    super(props);

    // this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      idYoutube: "P8C7-cC0zKw",
      inputValue: "",
      isLoaded: false,
      listResults: []
    };
  }

  async getResults() {
    try {
      const results = await axios.get('https://youtube.googleapis.com/youtube/v3/search',{
        params: {
          part: 'snippet',
          maxResults: 10,
          q: this.state.inputValue,
          key: API
        }
      });
      this.setState({
        isLoaded: true,
        listResults: results.data.items
      });
    } catch(err) {
      console.log('Failed to fetch data');
      this.setState({
        isLoaded: false
      });
    }
}

  changeVideo = () => {
    let video_id = this.state.inputValue.split("v=")[1];
    
    if(video_id) {
      let ampersandPosition = video_id.indexOf("&");

      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }

      this.setState({
        idYoutube: video_id
      });
    } else {
      this.getResults();
    }
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      this.changeVideo();
      this.setState({
        inputValue : '',
      });
    }
  };

  getId = (e) => {
      e.preventDefault();
      let getId = e.target.closest('.list-group-item').getAttribute('data-id');
      this.setState({
        idYoutube: getId,
        listResults: []
      });
  }

  onClick = () => {
    this.changeVideo();
    this.setState({
      inputValue : '',
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  
  }

  render() {
    let id = this.state.idYoutube;
    return (
      <div className="container-fluid fix" onClick={() => this.setState({listResults: []})}>
        <div className="row">
          <div className="col-md-8 p-0">
            <div className="search__container">
              {/* <p className="search__title">
                    
                </p> */}
              <input
                className="search__input"
                type="text"
                onKeyDown={this._handleKeyDown}
                value={this.state.inputValue}
                onChange={(e) => this.updateInputValue(e)}
                spellCheck = "false"
                placeholder ="Tìm kiếm hoặc dán link youtube vào đây"
              />
              <i
                className="fas fa-search fix-search"
                onClick={this.onClick}
              ></i>
              {this.state.isLoaded ? <SearchResult 
              action = {this.getId} 
              isLoaded={this.state.isLoaded}
              listResults={this.state.listResults}
              /> : null}
              
            </div>
          </div>
        </div>

        <div className="row setup">
          <div className="col-md-8 p-0 video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${this.state.idYoutube}`}
            ></iframe>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="container-chat">
              <div className="chatbox">
                <div className="top-bar">
                  <div className="avatar">
                    <p>V</p>
                  </div>
                  <div className="name">Voldemort</div>
                  <div className="menu">
                    <div className="dots"></div>
                  </div>
                </div>
                <div className="middle style-3">
                  <div className="voldemort">
                    <div className="incoming">
                      <div className="bubble">
                        What are you getting.. Oh, oops sorry dude.
                      </div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">
                        Well you should get your Dad a cologne. Here smell it.
                      </div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">
                        What are you getting.. Oh, oops sorry dude.
                      </div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="incoming">
                      <div className="bubble">What</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">lorem</div>
                    </div>
                    <div className="outcoming">
                      <div className="bubble">Well</div>
                    </div>

                    <div className="typing">
                      <div className="bubble">
                        <div className="ellipsis one"></div>
                        <div className="ellipsis two"></div>
                        <div className="ellipsis three"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-bar">
                  <div className="chat">
                    <input type="text" placeholder="Type a message..." />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="row list-video">
          <div className="col-md-8 p-0 search-list">
            <div className="card-deck">
            </div>
            <div className="card-columns">
              <div className="card"></div>
            </div>
          </div>
        </div> */}

        {/* Footer here */}
        <Footer />
      </div>
    );
  }
}

export default Chat;
