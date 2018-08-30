export const ADD_VIDEO = 'ADD VIDEO';
export const REMOVE_VIDEO = 'REMOVE VIDEO';

export const addVideo = (videoData) => {
  return {
    type: ADD_VIDEO,
    payload: videoData
  }
}

export const removeVideo = (videoId) => {
  return {
    type: REMOVE_VIDEO,
    payload: videoId
  }
}
