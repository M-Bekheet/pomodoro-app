import {todosActionTypes} from './Todos.types';
import { loadState } from '../store/localStorage';

const localState = loadState()

const initalState = {
    todos: [...localState.Todos.todos]
};

const TodosReducer = (state = initalState, action) => {
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