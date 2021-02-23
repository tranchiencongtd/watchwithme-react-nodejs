import React, { Component } from "react";
import axios from 'axios';


import SearchResult from './SearchResult/SearchResult';
import Footer from './Footer/Footer';
import MainChat from './ChatBox/MainChat/MainChat';

import "./Chat.css";

const API = 'AIzaSyCTYDkDvgIVWWLYcUCNUWFzbwY0hLnfB0c';
const API_1 = 'AIzaSyD_2O5NzPNVJ1DcyKPiFzunWOUqB5oCmxk';



class Chat extends Component {
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

  componentDidMount () {
    let boxChat = document.querySelector('.middle')
    boxChat.scrollTop = boxChat.scrollHeight;
  }

  async getResults() {
    try {
      const results = await axios.get('https://youtube.googleapis.com/youtube/v3/search',{
        params: {
          part: 'snippet',
          maxResults: 10,
          q: this.state.inputValue,
          key: API || API_1
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

      if (ampersandPosition !== -1) {
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
              className="fix-control"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${this.state.idYoutube}?controls=1`}
              frameBorder="0"
              allowFullScreen
              title="youtube"
            ></iframe>
          </div>
          <MainChat />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Chat;
