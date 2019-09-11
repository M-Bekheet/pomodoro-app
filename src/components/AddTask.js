import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../store/actions/tasks';
import Button from '@material-ui/core/Button';


class AddTask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      items: [],
      currentItem: '',
      alert: false
    }
  }
  saveTask = () => {
    const { title, items } = this.state;

    if(items.length > 0) {
      const task = { title, items }
      this.props.addTask(task);
      this.props.history.push('/');
    }
  }

  handleTitle = e => {
    this.setState({
      title: e.target.value
    })
  }
  handleCurrentItem = e => {
    this.setState({
      currentItem: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let { items, currentItem, title } = this.state;
    if(currentItem.trim().length > 0 && title.trim().length > 0){
      items.push(currentItem);
      this.setState({
        items,
        currentItem: '',
        alert: false
      })
    }
    else{
      this.setState({
        alert: true
      })
    }
  }
  render(){
    return(
      <div className="card add-task-card">

        {
          this.state.alert && <div className="alert">
            Please add a title and list items for the task.
          </div>
        }

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <input 
            type="text" 
            placeholder='Task Title' 
            onChange={this.handleTitle} 
            value={this.state.title} 
            className="input"
          />
          <input 
            type="text" 
            placeholder='What would you like to do' 
            onChange={this.handleCurrentItem} 
            className="input"
            value={this.state.currentItem} />
          <Button
            onClick={this.handleSubmit}
          >
            Add Item
          </Button>
           
        </form>

        <Button type="button" color="secondary" onClick={this.saveTask} className='button' >
          Save Task
        </Button>

        {
          this.state.items && this.state.items.map( (item, index) => {
            return <li  className="list__item show-dots" key={`item_${index}`}>{item}</li>
          })
        }

      </div>
    )
  }

}


const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch( addTask(task) )
})

export default connect(undefined, mapDispatchToProps)(AddTask);