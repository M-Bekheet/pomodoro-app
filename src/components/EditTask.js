import React from 'react';
import { connect } from 'react-redux';
import { editTask, removeTask, addTask } from '../store/actions/tasks';
import selectTask from '../store/selectors/tasks';
import Button from '@material-ui/core/Button';


export class EditTask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      items: [],
      currentItem: '',
      alert: false
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const task = selectTask(this.props.tasks, id);
    let { title, items } = task;
    items = items.map(itemContainer => itemContainer.item)
    this.setState({
      title, items
    })
  }
  
  saveTask = () => {
    const { title, items } = this.state;

    if (items.length > 0) {
      const task = { title, items }
      this.props.removeTask(this.props.match.params.id)
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
  handleRemoveItem = index => {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({ items })
  }
  handleSubmit = e => {
    e.preventDefault();
    let { items, currentItem, title } = this.state;
    if (currentItem.trim().length > 0 && title.trim().length > 0) {
      items.push(currentItem);
      this.setState({
        items,
        currentItem: '',
        alert: false
      })
    }
    else {
      this.setState({
        alert: true
      })
    }
  }
  render(){
    
    return (
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
          this.state.items && this.state.items.map((item, index) => {
            return (
              <li className="list__item show-dots" key={`item_${index}`}>
                <span className='item-content'>
                  {item}
                </span>
                <span className="remove-item clickable" onClick={e => this.handleRemoveItem(index)}>X</span>
              </li>
            )
          })
        }
  
      </div>
    )
  }
}

const mapStateToProps = ({tasks}) => ({
  tasks
})

const mapDispatchToProps = dispatch => ({
  editTask: (id, updates) => editTask(id, updates),
  removeTask: id => dispatch(removeTask(id)),
  addTask: task => dispatch(addTask(task)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditTask);