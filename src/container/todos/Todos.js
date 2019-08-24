import React from 'react';
import {connect} from 'react-redux';
import Todo from '../Todo/Todo';
import {deleteTodo} from '../../redux/Todos/Todos.actions';
import './Todos.css';

const Todos = ({todos, deleteTodo}) => {
        console.log(todos)
        const todosList = todos.map(todo => (
            <Todo key={todo.id} task={todo.task} id={todo.id} deleteTodo={deleteTodo} />
        ))

        console.log(todosList)
        return(
            <div className='Todos'>
                <h1 className='header'>Todo:</h1>
                {todosList}
            </div>
        )
}

const mapStateToProps = state => {
    console.log(state.Todos.todos)
    return {
        todos: state.Todos.todos
    }
}

const mapDispatchToProps = dispatch =>{
   return {
       deleteTodo : id => dispatch(deleteTodo(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);