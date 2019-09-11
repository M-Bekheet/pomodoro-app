import {createStore, combineReducers} from 'redux';
import tasksReducer from './reducers/tasksReducer';

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer
    })
  )
  return store;
}