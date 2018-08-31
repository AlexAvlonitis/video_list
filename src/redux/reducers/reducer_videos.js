import { ADD_VIDEO, REMOVE_VIDEO, EDIT_VIDEO } from '../actions/videos'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_VIDEO:
    return {
      list: [...state.list.concat(action.payload)]
    }

  case REMOVE_VIDEO:
    return {
      list: [...state.list.filter( (video) => video.id !== action.payload)]
    }

  case EDIT_VIDEO:
    const updatedItems = state.list.map(video => {
        if(video.id === action.payload.id){
          return { ...video, ...action.payload }
        }
        return video
      });
    return { list: updatedItems };

  default:
    return state;
  }
}
