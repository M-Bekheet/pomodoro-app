import React from 'react';
import trash from '../../img/trash.jpg'
import './Todo.css';

const Todo = ({task, id , deleteTodo}) => {
    console.log(id)
    const handleDelete = () => {
        deleteTodo(id)
    }
    
    return (
        <ul className='Todo'>
            <li className='Todo-li'>{task}</li>
            <img onClick={handleDelete} className='image' src={trash} alt='trash'/>
        </ul>
    )
}

export default Todo;