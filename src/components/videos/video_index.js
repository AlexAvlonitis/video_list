import React from 'react';
import VideoForm from './video_form';
import VideoList from './video_list';

export default function VideoIndex() {
  return(
    <div className="text-center">
      <h1>Video List</h1>
      <VideoForm />
      <VideoList />
    </div>
  )
}
