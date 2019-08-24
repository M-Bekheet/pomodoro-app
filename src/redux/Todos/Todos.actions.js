import uuid from 'uuid/v4';
import {todosActionTypes} from './Todos.types';

export const addTodo = todo => ({
    type: todosActionTypes.addTodo,
    payload: {task: todo, id: uuid(), completed: false}
})

export const deleteTodo = id => ({
    type: todosActionTypes.deleteTodo,
    payload: id
})

export const completeTodo = id => ({
    type: todosActionTypes.completeTodo,
    payload: id
})
