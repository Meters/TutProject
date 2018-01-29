// ./src/reducers/index.js
import { combineReducers } from 'redux';
import question from './reducerQuestion'

export default combineReducers({
  question: question,
  // More reducers if there are
  // can go here
});