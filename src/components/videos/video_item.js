import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeVideo } from '../../redux/actions/videos';

class VideoItem extends Component {
  handleRemoveClick = () => {
    const video = this.props.video;

    this.props.removeVideo(video.id);
  }

  render() {
    const video = this.props.video;

    return(
      <li>
        <p>{video.name}</p>
        <p>{video.duration}</p>
        <p>{video.url}</p>
        <button>Edit</button>
        <button onClick={this.handleRemoveClick}>
          Remove
        </button>
        <hr />
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
