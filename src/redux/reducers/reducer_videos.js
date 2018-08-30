import { ADD_VIDEO } from '../actions/videos'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_VIDEO:
    return Object.assign({}, state, { list: state.list.concat(action.payload) });

  default:
    return state;
  }
}
