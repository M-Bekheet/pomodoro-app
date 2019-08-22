import uuid from 'uuid/v4';
import {todosActionTypes} from './Todos.types';

export const addTodo = todo => ({
    type: todosActionTypes.addTodos,
    payload: {task: todo, id: uuid(), completed: false}
})

export const deleteTodo = id => ({
    type: todosActionTypes.deleteTodos,
    payload: id
})
