import { combineReducers } from 'redux'
// reducers
import bibleIndexReducer from './bibleIndexReducer';
import resourcesReducer from './resourcesReducer';

// combining reducers
const rootReducers = combineReducers({
  bibleIndexReducer,
  resourcesReducer
});

export default rootReducers;
