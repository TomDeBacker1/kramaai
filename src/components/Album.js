import React, { Component } from "react";

import {
  photosUnknown,
  photos2009,
  photos2010,
  photos2019
} from "../images/photosURLs";

import "../styles/Album.css";

// Use this video for the slideshow or the slideshow from home screen
// https://www.youtube.com/watch?v=AqOaI41TADU

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: undefined
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    let temp = undefined;
    switch (params.id) {
      case "album2009":
        temp = photos2009;
        break;
      case "album2010":
        temp = photos2010;
        break;
      case "album2019":
        temp = photos2019;
        break;
      default:
        temp = photosUnknown;
    }
    this.setState({
      id: temp,
      name: params.id
    });
  }

  render() {
    return (
      <div>
        {this.state.id !== undefined && (
          <div>
            <div className="albumTitle">{this.state.name.toString()}</div>
            <div className="albumDiv">
              {this.state.id.map(url => (
                <a href={url} key={url}>
                  <img src={url} alt="Test" className="albumImage" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Album;
