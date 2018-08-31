export const ADD_VIDEO = 'ADD VIDEO';
export const REMOVE_VIDEO = 'REMOVE VIDEO';
export const EDIT_VIDEO = 'EDIT VIDEO';

export const addVideo = (video) => {
  return {
    type: ADD_VIDEO,
    payload: video
  }
}

export const removeVideo = (videoId) => {
  return {
    type: REMOVE_VIDEO,
    payload: videoId
  }
}

export const editVideo = (video) => {
  return {
    type: EDIT_VIDEO,
    payload: video
  }
}
