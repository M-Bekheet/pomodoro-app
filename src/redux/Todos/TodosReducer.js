import uuid from 'uuid/v4';
import {todosActionTypes} from './Todos.types';

const initalState = {
    todos: [
            {task: 'wash diches', id: uuid(), completed: false},
            {task: 'eat pizza', id: uuid(), completed: false}
        ]
};

const TodosReducer = (state = initalState, action) => {
    console.log(state.todos)
    switch (action.type){
        case todosActionTypes.addTodos:
            return {
                todos: [...state.todos, action.payload]
            };

        case todosActionTypes.deleteTodos:
            return {todos: state.todos.filter(todo => todo.id !== action.payload)};
            
        default:
            return state;
    }
}

export default TodosReducer;