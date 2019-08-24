import {todosActionTypes} from './Todos.types';
import { loadState } from '../store/localStorage';

const localState = loadState()

const initalState = {
    todos: [...localState.Todos.todos]
};

const TodosReducer = (state = initalState, action) => {
    switch (action.type){
        case todosActionTypes.addTodo:
            return {
                todos: [...state.todos, action.payload]
            };

        case todosActionTypes.deleteTodo:
            return {todos: state.todos.filter(todo => todo.id !== action.payload)};
            
        case todosActionTypes.completeTodo:
            console.log(action.payload);
            const todos = state.todos.map(todo => {
                if(todo.id === action.payload) todo.completed = !todo.completed;
                return todo
            })
            return {todos};
            
        default:
            return state;
    }
}

export default TodosReducer;