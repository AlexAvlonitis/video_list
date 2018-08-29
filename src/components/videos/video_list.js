import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from './video_item';

class VideoList extends Component {
  renderVideoItem = (video, index) => {
    <VideoItem key={index} video={video} />
  }

  renderVideos = () => {
    this.props.videos.map(this.renderVideoItem)
  }

  render() {
    return(
      <ul>
        {this.renderVideos()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos.list
  };
}

export default connect(mapStateToProps, null)(VideoList);
