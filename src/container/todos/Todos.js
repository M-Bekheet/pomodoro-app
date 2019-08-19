import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = ({todos, deleteTodo}) => {
        const todosList = todos.map(todo => (
            <Todo key={todo.id} task={todo.task} id={todo.id} deleteTodo={deleteTodo} />
        ))
        return(
            <div className='Todos'>
                <h1 className='header'>Todo:</h1>
                {todosList}
            </div>
        )
}

export default Todos;