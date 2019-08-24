import React from 'react';
import {connect} from 'react-redux';
import Todo from '../Todo/Todo';
import {deleteTodo, completeTodo} from '../../redux/Todos/Todos.actions';
import './Todos.css';

const Todos = ({todos, deleteTodo, completeTodo}) => {
    const todosList = todos.map(todo => (
        <Todo 
          key={todo.id} 
          task={todo.task} 
          id={todo.id}
          completed={todo.completed}
          deleteTodo={deleteTodo} 
          completeTodo={completeTodo} 
        />
    ))
    return(
        <div className='Todos'>
            {
                todosList.length > 0 && (
                    <div>
                        <h1 className='header'>Todo:</h1>
                        {todosList}
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.Todos.todos
    }
}

const mapDispatchToProps = dispatch =>{
   return {
       deleteTodo : id => dispatch(deleteTodo(id)),
       completeTodo: id => dispatch(completeTodo(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);