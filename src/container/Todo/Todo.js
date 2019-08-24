import React from 'react';
import trash from '../../img/trash.jpg'
import './Todo.css';

const Todo = ({task, id , deleteTodo, completeTodo, completed}) => {
    console.log(completed);
    
    const handleDelete = () => {
        deleteTodo(id)
    }
    const handleClick = () => {
        completeTodo(id)
    }
    return (
        <ul 
            className={`Todo ${completed ? 'completed' : ''} `}
            onClick={handleClick}
            >
            <li className="Todo-li">{task}</li>
            <img onClick={handleDelete} className='image' src={trash} alt='trash'/>
        </ul>
    )
}

export default Todo;