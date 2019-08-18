import { createStore } from 'redux';
import TaskReducer from '../reducers/TasksReducer';
import { combineReducers } from 'redux';

export default () => {
  const store = createStore(combineReducers({
    Tasks: TaskReducer
  }))
  return store
}