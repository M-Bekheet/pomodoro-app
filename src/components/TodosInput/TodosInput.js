import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/Todos/Todos.actions'
import './TodosInput.css';

class TodosInput extends Component {
    constructor(){
        super();
        this.state = {text: ''}
    }

    handleChange = e => {
        this.setState({text: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.text)
        this.setState({text: ''})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input className='Input' type='text' placeholder='What Do You Need To Do?' value={this.state.text} onChange={this.handleChange} />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       addTodo : newTodo => dispatch(addTodo(newTodo))
    }
}

export default connect(null, mapDispatchToProps)(TodosInput);