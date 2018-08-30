import React, { Component } from 'react';

export default class VideoItem extends Component {
  render() {
    const video = this.props.video;

    return(
      <li>
        <p>{video.name}</p>
        <p>{video.duration}</p>
        <p>{video.url}</p>
        <hr />
      </li>
    );
  }
}
