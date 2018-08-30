export const ADD_VIDEO = 'ADD VIDEO';

export const addVideo = (videoData) => {
  return {
    type: ADD_VIDEO,
    payload: videoData
  }
}
