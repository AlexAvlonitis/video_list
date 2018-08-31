import React, { Component } from 'react';
import VideoIndex from './videos/video_index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <VideoIndex />
        </div>
      </div>
    );
  }
}

export default App;
