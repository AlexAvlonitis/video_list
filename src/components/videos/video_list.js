import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from './video_item';

class VideoList extends Component {
  renderVideoItem = (video) => {
    return(
      <VideoItem key={video.id} video={video} />
    )
  }

  renderVideos = () => {
    const videoList = this.props.videoList;

    return (
      videoList.map(this.renderVideoItem)
    );
  }

  render() {
    return(
      <div>
        { this.renderVideos() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videoList: state.videos.list
  };
}

export default connect(mapStateToProps, null)(VideoList);
