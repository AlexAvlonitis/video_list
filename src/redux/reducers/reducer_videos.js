import { ADD_VIDEO, REMOVE_VIDEO } from '../actions/videos'

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
      list: [...state.list.filter( (item) => item.id !== action.payload)]
    }

  default:
    return state;
  }
}
