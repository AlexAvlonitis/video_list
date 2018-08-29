import { combineReducers } from 'redux';
import videos from './reducer_videos';

const rootReducer = combineReducers({
  videos
});

export default rootReducer;
