import { createStore } from 'redux';
import TaskReducer from '../Task/TasksReducer';
import TodosReducer from '../Todos/TodosReducer';
import { combineReducers } from 'redux';


export default () => {
  const store = createStore(combineReducers({
    Tasks: TaskReducer,
    Todos: TodosReducer
  }))
  return store;
}
